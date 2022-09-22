export default function Layout({ children }) {
    return (
      <div className="bg-white dark:bg-darkblack font-primary text-gray-900 dark:text-gray-50 antialiased min-h-screen">
        {children}
      </div>
    )
  
  }