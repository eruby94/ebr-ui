import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className="page-root pt-[80px] pb-12 flex items-center justify-center flex-col">
      <div
        className="min-h-[500px] w-full bg-center bg-no-repeat bg-cover relative mb-12"
        style={{ backgroundImage: `url(/images/hero.jpg)` }}
      >
        <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-40">
          <Image
            className="w-[1px] h-auto opacity-0"
            src="/images/hero.jpg"
            width={2016}
            height={1135}
            alt="Evan standing in front of a street-art backdrop"
          />
        </div>
      </div>
      <p className="mb-12 px-12 text-center">A creatively-oriented technologist based in Detroit.</p>
      <div className="flex items-center">
        <FontAwesomeIcon className="text-red w-[50px] h-auto" icon={icon({ name: 'envelopes-bulk' })} />
        <a className="ml-6 text-xl" href="mailto:evanruby94@gmail.com">
          evanruby94@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Homepage
