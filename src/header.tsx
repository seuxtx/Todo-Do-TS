export const Header = () => {
    return (
        <div 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '50%', 
                height: '200px', 
                backgroundColor: '#0D0D0D', 
                margin: '0 auto'
            }}
        >
            <img 
                src="/images/Logo.png" 
                alt="Logo"
                style={{
                    display: 'block',
                    maxWidth: '100%',
                    height: 'auto'
                }} 
            />
        </div>
    );
};
