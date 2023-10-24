'user client'

export default function page({children}: {children: React.ReactNode}) {
    return (
      <div>
        <div className="text-blue">This is todoList Page</div>
        <div>{children}</div>
      </div>
    )
  }