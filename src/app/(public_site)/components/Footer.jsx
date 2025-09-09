const Footer = () => {
 const currentYear = new Date().getFullYear();

 return (
   <footer className="w-full bg-gray-900 text-white pixel-shadow">
     <div className="flex justify-between items-center px-8 py-2 max-[750px]:px-4 max-[750px]:gap-2 max-[750px]:flex-col-reverse">

       {/* COPYRIGHT */}
       <div className="flex items-center">
         <p className="text-[24px] text-blue-300 max-[750px]:text-xs">
           © {currentYear} SharkByte
         </p>
       </div>

       {/* LINKS */}
       <div className= "flex gap-6 max-[750px]:gap-4 text-[20px] pt-[3px]">
        <a
          href="https://weareinit.notion.site/Terms-and-Conditions-SharkByte-2025-2629f4e8ae4e80329c36f65620006db9"
          className="hover:text-[#8b5cf6] transition-colors duration-300"
        >
          SharkByte TOS
        </a>
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          className="hover:text-[#8b5cf6] transition-colors duration-300"  
         > 
          MLH Code of Conduct
        </a>
       </div>

     </div>
   </footer>
 )
}

export default Footer