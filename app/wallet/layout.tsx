interface WalletLayoutProps {
    children:React.ReactNode;
}
export default function WalletLayout({children}:WalletLayoutProps){
    return (
        <div className="bg-gradient-to-b select-none from-[#730d06] to-[#2e1243] h-screen flex justify-center"> 
        {children}
        </div>
    );
}