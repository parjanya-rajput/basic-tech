import { Contactus } from '../Components/Contactus'
import { Faq } from '../Components/faq'

export const ContactUs = () => {
  return (
<section className="py-16 relative overflow-hidden">
<div
        className="absolute top-1/6 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
      <div
        className="absolute z-0 left-1/2 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
      <div
        className="absolute z-0 right-0 top-1/3 rounded-full blur-3xl h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
      <div
        className="absolute z-0 left-0 top-2/3 rounded-full blur-3xl h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
    <Contactus/>
    <Faq/>
    </section>
  )
}
