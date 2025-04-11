
import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';
import { useTutorial } from '@/hooks/useTutorial';
import { createPortal } from 'react-dom';

const TutorialSteps: React.FC = () => {
  const { 
    isActive, 
    currentStep, 
    steps, 
    nextStep, 
    prevStep, 
    skipTutorial
  } = useTutorial();
  
  const [tooltipStyle, setTooltipStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isActive || steps.length === 0) return;
    
    const updatePosition = () => {
      const step = steps[currentStep];
      if (!step) return;
      
      const targetElement = document.querySelector(step.target);
      if (!targetElement) return;
      
      const targetRect = targetElement.getBoundingClientRect();
      const tooltipRect = tooltipRef.current?.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Default offset from target
      const offset = 15;
      
      // Default tooltip and arrow position
      let newTooltipStyle = {};
      let newArrowStyle = {};
      
      // Calculate best placement based on available space
      const placement = step.placement || calculateBestPlacement(targetRect, tooltipRect, viewportWidth, viewportHeight);
      
      switch (placement) {
        case 'top':
          newTooltipStyle = {
            left: `${targetRect.left + targetRect.width / 2}px`,
            top: `${targetRect.top - offset}px`,
            transform: 'translate(-50%, -100%)'
          };
          newArrowStyle = {
            left: '50%',
            top: '100%',
            transform: 'translate(-50%, -50%) rotate(45deg)'
          };
          break;
        case 'bottom':
          newTooltipStyle = {
            left: `${targetRect.left + targetRect.width / 2}px`,
            top: `${targetRect.bottom + offset}px`,
            transform: 'translate(-50%, 0)'
          };
          newArrowStyle = {
            left: '50%',
            top: '0',
            transform: 'translate(-50%, -50%) rotate(45deg)'
          };
          break;
        case 'left':
          newTooltipStyle = {
            left: `${targetRect.left - offset}px`,
            top: `${targetRect.top + targetRect.height / 2}px`,
            transform: 'translate(-100%, -50%)'
          };
          newArrowStyle = {
            left: '100%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)'
          };
          break;
        case 'right':
          newTooltipStyle = {
            left: `${targetRect.right + offset}px`,
            top: `${targetRect.top + targetRect.height / 2}px`,
            transform: 'translate(0, -50%)'
          };
          newArrowStyle = {
            left: '0',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)'
          };
          break;
      }
      
      // Ensure tooltip stays within viewport
      const tooltipWidth = tooltipRect?.width || 300;
      const tooltipHeight = tooltipRect?.height || 200;
      
      // Adjust horizontal position if needed
      if (placement === 'top' || placement === 'bottom') {
        const tooltipLeft = (targetRect.left + targetRect.width / 2) - (tooltipWidth / 2);
        if (tooltipLeft < 10) {
          newTooltipStyle = {
            ...newTooltipStyle,
            left: '10px',
            transform: 'translate(0, ' + (placement === 'top' ? '-100%' : '0') + ')'
          };
          newArrowStyle = {
            ...newArrowStyle,
            left: `${targetRect.left + targetRect.width / 2 - 10}px`,
            transform: 'translate(-50%, -50%) rotate(45deg)'
          };
        } else if (tooltipLeft + tooltipWidth > viewportWidth - 10) {
          newTooltipStyle = {
            ...newTooltipStyle,
            left: `${viewportWidth - tooltipWidth - 10}px`,
            transform: 'translate(0, ' + (placement === 'top' ? '-100%' : '0') + ')'
          };
          newArrowStyle = {
            ...newArrowStyle,
            left: `${targetRect.left + targetRect.width / 2 - (viewportWidth - tooltipWidth - 10)}px`,
          };
        }
      }
      
      setTooltipStyle(newTooltipStyle);
      setArrowStyle(newArrowStyle);
      
      // Ensure target element is visible
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    };
    
    // Calculate best placement based on available space
    const calculateBestPlacement = (targetRect: DOMRect, tooltipRect: DOMRect | undefined, viewportWidth: number, viewportHeight: number) => {
      const tooltipWidth = tooltipRect?.width || 300;
      const tooltipHeight = tooltipRect?.height || 200;
      
      // Check if there's enough space in each direction
      const spaceTop = targetRect.top;
      const spaceBottom = viewportHeight - targetRect.bottom;
      const spaceLeft = targetRect.left;
      const spaceRight = viewportWidth - targetRect.right;
      
      // Find the direction with the most space
      const maxSpace = Math.max(spaceTop, spaceBottom, spaceLeft, spaceRight);
      
      if (maxSpace === spaceTop && spaceTop > tooltipHeight) return 'top';
      if (maxSpace === spaceBottom && spaceBottom > tooltipHeight) return 'bottom';
      if (maxSpace === spaceLeft && spaceLeft > tooltipWidth) return 'left';
      if (maxSpace === spaceRight && spaceRight > tooltipWidth) return 'right';
      
      // Default to bottom if no clear choice
      return 'bottom';
    };
    
    updatePosition();
    
    // Update position on window resize or scroll
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isActive, currentStep, steps]);
  
  if (!isActive || steps.length === 0) {
    return null;
  }
  
  const currentTutorialStep = steps[currentStep];
  if (!currentTutorialStep) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-auto" onClick={skipTutorial}></div>
      
      <div 
        ref={tooltipRef}
        className="fixed bg-white rounded-lg shadow-xl p-5 w-80 pointer-events-auto animate-fade-in"
        style={tooltipStyle}
      >
        <button 
          onClick={skipTutorial}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1"
          aria-label="Cerrar tutorial"
        >
          <X size={18} />
        </button>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium text-choco-green">{currentTutorialStep.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{currentTutorialStep.content}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentStep ? 'bg-choco-green' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <div className="flex space-x-2">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="px-3 py-1 text-xs border border-choco-blue text-choco-blue rounded-md hover:bg-choco-blue hover:bg-opacity-10 transition-colors"
              >
                Anterior
              </button>
            )}
            
            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="px-3 py-1 text-xs bg-choco-green text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Siguiente
              </button>
            ) : (
              <button
                onClick={skipTutorial}
                className="px-3 py-1 text-xs bg-choco-gold text-choco-dark rounded-md hover:bg-opacity-90 transition-colors font-medium"
              >
                ¡Entendido!
              </button>
            )}
          </div>
        </div>
        
        {/* Arrow indicator */}
        <div
          className="absolute w-4 h-4 bg-white"
          style={arrowStyle}
        />
      </div>
      
      {/* Highlight element */}
      <div className="absolute" style={{
        top: document.querySelector(currentTutorialStep.target)?.getBoundingClientRect().top,
        left: document.querySelector(currentTutorialStep.target)?.getBoundingClientRect().left,
        width: document.querySelector(currentTutorialStep.target)?.getBoundingClientRect().width,
        height: document.querySelector(currentTutorialStep.target)?.getBoundingClientRect().height,
        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
        borderRadius: '4px',
        pointerEvents: 'none',
      }} />
    </div>,
    document.body
  );
};

export default TutorialSteps;
