const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 text-white pixel-shadow">
      <div className="flex justify-between items-center px-8 py-2 max-[1050px]:px-4 max-[1050px]:gap-2 max-[1050px]:flex-col-reverse">

        {/* COPYRIGHT */}
        <div className="flex items-center">
          <p className="text-[24px] text-blue-300 max-[1050px]:text-xs">
            © {currentYear} SharkByte
          </p>
        </div>

        {/* LINKS */}
        <div
          className="
            flex gap-6 max-[1050px]:gap-4 text-[20px] pt-[3px]
            max-[750px]:grid max-[750px]:grid-cols-2 max-[750px]:gap-y-2
            max-[390px]:grid-cols-1 max-[390px]:text-center max-[390px]:my-2 max-[390px]:text-[19px]
          "
        >
          <a
            href="https://weareinit.notion.site/Terms-and-Conditions-SharkByte-2025-2629f4e8ae4e80329c36f65620006db9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b5cf6] transition-colors duration-300"
          >
            SharkByte TOS
          </a>
          <a
            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b5cf6] transition-colors duration-300"
          >
            MLH Code of Conduct
          </a>
          <a
            href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b5cf6] transition-colors duration-300"
          >
            MLH Contest Terms
          </a>
          <a
            href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b5cf6] transition-colors duration-300"
          >
            MLH Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
