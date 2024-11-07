import Formulario from "@/components/shared/Formulario";

export default function FormLab(){
    return(
        <Formulario>
            <div className="grid grid-rows-1 grid-cols-3 max-sm:grid-cols-1">
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
            <div className="grid grid-rows-1 grid-cols-4 max-sm:grid-cols-1">
                <div>2</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
            </div>
            <div className="grow">
                 <div>3</div>   
            </div>
        </Formulario>
    )
}