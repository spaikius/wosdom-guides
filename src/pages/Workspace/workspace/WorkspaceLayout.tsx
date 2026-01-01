import type React from 'react';

type WorkspaceLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({
  left,
  right,
}) => {
  return (
    <section className="mx-auto w-full max-w-400 px-4 py-6 md:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        {left}
        {right}
      </div>
    </section>
  );
};
