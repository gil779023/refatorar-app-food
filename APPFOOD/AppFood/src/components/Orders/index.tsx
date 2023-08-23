import { Container } from "../OrderBoard/style"
import { OrderBoard } from "../OrderBoard"

export function Orders() {
    return (
        <Container>
            
            <OrderBoard></OrderBoard>
            <OrderBoard></OrderBoard>
            <OrderBoard></OrderBoard>
        
        </Container>
    )
}