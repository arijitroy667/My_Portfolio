const Card = ({ children }) => (
    <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6">
      {children}
    </div>
  );
  
  const CardContent = ({ children }) => <div>{children}</div>;
  
  export { Card, CardContent };
  