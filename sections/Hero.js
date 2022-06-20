import { Button } from "../components/button";

export function Hero() {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi I&apos;m <span className="dark:text-purple-600">Zaiko</span></h1>
      <h3 className="text-4xl my-3">I am Web Developer</h3>
      <p className="text-gray-700 mb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil porro libero eaque natus distinctio sed. Tenetur unde non saepe, hic eveniet quidem laboriosam! Quos doloremque aliquam, labore quam esse harum.
      </p>
      <Button
        className="bg-purple-600 text-white px-6"
      >
        Hire Me!
      </Button>
    </section>
  )
}
