interface GlobalHeaderProps {
  title: string;
  description?: string;
  rightContent?: React.ReactNode;
}

export default function GlobalHeader({ title, description, rightContent }: GlobalHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-mono text-emerald-800 dark:text-white">{title}</h1>
        {description && ( <p className="mt-1 font-mono text-emerald-800 dark:text-white">{description}</p>)}
      </div>
        {rightContent && ( <div className="flex items-center">{rightContent}</div>)}
    </div>
  )
}