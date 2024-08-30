// src/components/ui/card.js
export const Card = ({ children }) => {
    return <div className="card">{children}</div>;
  };
  
  export const CardContent = ({ children }) => {
    return <div className="card-content">{children}</div>;
  };
  
  export const CardHeader = ({ children }) => {
    return <div className="card-header">{children}</div>;
  };
  
  export const CardTitle = ({ children }) => {
    return <h2 className="card-title">{children}</h2>;
  };
  