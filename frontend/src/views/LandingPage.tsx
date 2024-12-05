
export default function LandingPage() {
  return (
    <div className="pt-20">
    <picture>
      <source
        media="(max-width:640px)"
       
      />
      <source
        media="(min-width:641px)"
       
      />
      <img
        className="w-full"
        src="https://www.shutterstock.com/image-photo/medical-healthcare-concept-banner-stethoscope-600nw-1865293900.jpg"
        alt="Articulo principal"
      />
    </picture>
  </div>
  )
}
