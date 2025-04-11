
import React, { createContext, useState, useEffect } from 'react';

export interface TutorialStep {
  target: string;
  title: string;
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

interface TutorialContextType {
  isActive: boolean;
  currentStep: number;
  steps: TutorialStep[];
  startTutorial: () => void;
  endTutorial: () => void;
  nextStep: () => void;
  prevStep: () => void;
  skipTutorial: () => void;
}

export const TutorialContext = createContext<TutorialContextType | undefined>(undefined);

const TUTORIAL_COMPLETED_KEY = 'campo-artesano-tutorial-completed';

// Default tutorial steps
const defaultSteps: TutorialStep[] = [
  {
    target: '.navbar-categories',
    title: '¡Bienvenido a Campo Artesano!',
    content: 'Explora las diferentes categorías de productos artesanales.',
    placement: 'bottom'
  },
  {
    target: '.search-products',
    title: 'Busca productos',
    content: 'Encuentra tus productos favoritos por nombre o descripción.',
    placement: 'bottom'
  },
  {
    target: '.featured-products',
    title: 'Productos destacados',
    content: 'Descubre nuestras recomendaciones y productos más populares.',
    placement: 'top'
  },
  {
    target: '.cart-icon',
    title: 'Tu carrito de compras',
    content: 'Aquí puedes ver los productos que has añadido y proceder al pago.',
    placement: 'bottom'
  },
  {
    target: '.artisan-section',
    title: 'Conoce a los artesanos',
    content: 'Aprende sobre las personas detrás de cada producto y sus historias.',
    placement: 'top'
  }
];

export const TutorialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps] = useState<TutorialStep[]>(defaultSteps);
  const [isTutorialCompleted, setIsTutorialCompleted] = useState<boolean | null>(null);
  
  // Check if tutorial has been completed before
  useEffect(() => {
    const tutorialCompleted = localStorage.getItem(TUTORIAL_COMPLETED_KEY) === 'true';
    setIsTutorialCompleted(tutorialCompleted);
    
    // Auto-start tutorial if first visit after a delay
    if (!tutorialCompleted) {
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const startTutorial = () => {
    setIsActive(true);
    setCurrentStep(0);
  };
  
  const endTutorial = () => {
    setIsActive(false);
    localStorage.setItem(TUTORIAL_COMPLETED_KEY, 'true');
    setIsTutorialCompleted(true);
  };
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endTutorial();
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const skipTutorial = () => {
    endTutorial();
  };
  
  return (
    <TutorialContext.Provider
      value={{
        isActive,
        currentStep,
        steps,
        startTutorial,
        endTutorial,
        nextStep,
        prevStep,
        skipTutorial
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};
