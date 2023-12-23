import { RiMoonLine, RiSunLine } from '@remixicon/react'
const ThemeChange = () => {
  return (
    <label className="btn btn-circle btn-ghost swap swap-rotate">
      <input type="checkbox" className="theme-controller" value="dim" />
      <RiSunLine className="swap-off h-6 w-6 fill-current" />
      <RiMoonLine className="swap-on h-6 w-6 fill-current" />
    </label>
  )
}

export default ThemeChange
