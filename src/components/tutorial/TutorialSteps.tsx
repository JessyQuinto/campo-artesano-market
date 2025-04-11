
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useTutorial } from '@/hooks/useTutorial';

const TutorialSteps: React.FC = () => {
  const { 
    isActive, 
    currentStep, 
    steps, 
    nextStep, 
    prevStep, 
    skipTutorial
  } = useTutorial();
  
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [arrowPosition, setArrowPosition] = useState('bottom');
  
  useEffect(() => {
    if (!isActive || steps.length === 0) return;
    
    const updatePosition = () => {
      const step = steps[currentStep];
      if (!step) return;
      
      const targetElement = document.querySelector(step.target);
      if (!targetElement) return;
      
      const rect = targetElement.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Determine optimal position for tooltip
      let newPosition = { top: 0, left: 0 };
      let newArrowPosition = step.placement || 'bottom';
      
      // Default positioning based on placement
      switch (newArrowPosition) {
        case 'top':
          newPosition = {
            top: rect.bottom + window.scrollY + 15,
            left: rect.left + window.scrollX + rect.width / 2
          };
          break;
        case 'bottom':
          newPosition = {
            top: rect.top + window.scrollY - 15,
            left: rect.left + window.scrollX + rect.width / 2
          };
          break;
        case 'left':
          newPosition = {
            top: rect.top + window.scrollY + rect.height / 2,
            left: rect.right + window.scrollX + 15
          };
          break;
        case 'right':
          newPosition = {
            top: rect.top + window.scrollY + rect.height / 2,
            left: rect.left + window.scrollX - 15
          };
          break;
        case 'center':
          newPosition = {
            top: rect.top + window.scrollY + rect.height / 2,
            left: rect.left + window.scrollX + rect.width / 2
          };
          break;
        default:
          newPosition = {
            top: rect.bottom + window.scrollY + 15,
            left: rect.left + window.scrollX + rect.width / 2
          };
          newArrowPosition = 'top';
      }
      
      setPosition(newPosition);
      setArrowPosition(newArrowPosition);
      
      // Ensure target element is visible
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    };
    
    updatePosition();
    
    // Update position on window resize
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [isActive, currentStep, steps]);
  
  if (!isActive || steps.length === 0) {
    return null;
  }
  
  const currentTutorialStep = steps[currentStep];
  if (!currentTutorialStep) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-auto" onClick={skipTutorial}></div>
      
      <div 
        className="absolute bg-white rounded-lg shadow-xl p-4 w-80 pointer-events-auto animate-fade-in"
        style={{ 
          top: `${position.top}px`, 
          left: `${position.left}px`, 
          transform: 'translate(-50%, -50%)' 
        }}
      >
        <button 
          onClick={skipTutorial}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar tutorial"
        >
          <X size={18} />
        </button>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium text-campo-brown">{currentTutorialStep.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{currentTutorialStep.content}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentStep ? 'bg-campo-brown' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <div className="flex space-x-2">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="px-3 py-1 text-xs border border-campo-brown text-campo-brown rounded hover:bg-campo-cream"
              >
                Anterior
              </button>
            )}
            
            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="px-3 py-1 text-xs bg-campo-brown text-white rounded hover:bg-opacity-90"
              >
                Siguiente
              </button>
            ) : (
              <button
                onClick={skipTutorial}
                className="px-3 py-1 text-xs bg-campo-green text-white rounded hover:bg-opacity-90"
              >
                ¡Entendido!
              </button>
            )}
          </div>
        </div>
        
        {/* Arrow indicator */}
        <div
          className={`absolute w-4 h-4 bg-white transform rotate-45 ${
            arrowPosition === 'top' ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' :
            arrowPosition === 'bottom' ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' :
            arrowPosition === 'left' ? 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2' :
            'right-0 top-1/2 translate-x-1/2 -translate-y-1/2'
          }`}
        />
      </div>
    </div>
  );
};

export default TutorialSteps;
