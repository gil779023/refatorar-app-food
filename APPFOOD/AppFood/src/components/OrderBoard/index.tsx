import { Board, OrdersContainer } from "./style"

export function OrderBoard(){
    return (
        
        <Board>
            <header>
                <span>⏳</span>
                <strong>Em Producao</strong>
                <span>(3)</span>
            </header>

            <OrdersContainer>
                <button type="button">
                    <strong>Mesa 4</strong>
                    <span>☕Cafe</span>
                    <span>🍰Bolo</span>
                </button>
                <button type="button">
                    <strong>Mesa 1</strong>
                    <span>🍽️Almoco</span>
                    <span>🍸Bebida</span>
                </button>
            </OrdersContainer>
        </Board>
        
        
        
    )
        
}