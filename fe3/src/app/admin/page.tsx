'user client'

export default function page({children}: {children: React.ReactNode}) {
    return (
      <div>
        <div>This is Admin Page</div>
        <div>{children}</div>
      </div>
    )
  }