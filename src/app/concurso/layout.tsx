import { Header } from "@/components/ui/Header";

export default function layout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}