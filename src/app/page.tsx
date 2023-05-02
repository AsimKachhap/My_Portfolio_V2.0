export default function Home() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-5 gap-24 my-4 ">
          <div className="col-span-3">
            <p className="text-3xl font-semibold tracking-tight">
              Hello I'm Asim a Full Stack Developer based in India.
            </p>
            <p>
              I was a student at Lambda School where I spent 8 months learnings
              the fundamentals of front-end and back-end web development. I also
              woked at Lambda whee my ole was split between helping scale
              process though automations and overseeing student teams.
            </p>
            <p>
              Though experiences, I had the opportunity to work with both small
              and large specialised and cross-functional teams across different
              time zones and developed a working style that leans towards
              flexibility, clarity, and collaboration.
            </p>
            <p>
              I'm currently looking for a new role as developer.{" "}
              <span className="text-emerald-500">Hire me?</span>
            </p>
          </div>
          <div className="object-cover h-[400px] w-[300px]">
            <img className="" src="assets/heroImage.png" alt="Hero Image" />
          </div>
        </div>
        <div>
          <div>
            <button>View LinkedIn</button>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
