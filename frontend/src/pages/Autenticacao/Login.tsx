import Image from "next/image";
import Logo from "@/assets/img/logoZhaz.png"

export default function LoginForm() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center mt-11">
                <Image src={Logo} alt="" className="w-[80%] h-16"/>
            </div>
            <div className="mx-4 mt-16 text-white">
                
               <div> form</div>
               <div> form</div>
               <div> form</div>
               <div> form</div>
               <div> form</div>
               <div> form</div>
               <div> form</div>
               <div> form</div>
               <div> form</div>
            </div>
        </div>
    )
}