import React from 'react';

interface PageContainerProps {
  children?: React.ReactNode;
  className?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageHeaderAction?: React.ReactNode;
}

export function PageContainer({ 
  children, 
  className = '',
  pageTitle,
  pageDescription,
  pageHeaderAction
}: PageContainerProps) {
  return (
    <main className={`min-h-screen p-4 md:p-6 ${className}`}>
      {(pageTitle || pageDescription || pageHeaderAction) && (
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            {pageTitle && <h1 className="text-3xl font-bold">{pageTitle}</h1>}
            {pageDescription && <p className="text-sm text-gray-600 dark:text-gray-400">{pageDescription}</p>}
          </div>
          {pageHeaderAction && <div className="mt-4 md:mt-0">{pageHeaderAction}</div>}
        </div>
      )}
      {children}
    </main>
  );
}
