import Image from 'next/image'

const SocialsOverlay = () => {
  return (
    <ul className="fixed bottom-6 right-6 z-10 flex flex-row gap-4">
      <li>
        <Image
          src="/images/discord.png"
          alt="Discord"
          width={48}
          height={48}
          priority
          className="h-auto bg-transparent hover:opacity-80 transition-opacity"
        />
      </li>
      <li>
        <Image
          src="/images/instagram.png"
          alt="Instagram"
          width={48}
          height={48}
          priority
          className="h-auto bg-transparent hover:opacity-80 transition-opacity"
        />
      </li>
      <li>
        <Image
          src="/images/linkedin.png"
          alt="LinkedIn"
          width={48}
          height={48}
          priority
          className="h-auto bg-transparent hover:opacity-80 transition-opacity"
        />
      </li>
    </ul>
  )
}

export default SocialsOverlay
