import { BugWrapper } from "./bug-wrapper";

function Testimonial({
  name,
  handle,
  text,
}: {
  name: string;
  handle: string;
  text: string;
}) {
  return (
    <div className="border border-black rounded-xl px-4 md:px-6 md:py-4 py-6 w-[20rem] md:w-[22rem] shrink-0">
      <div className="flex flex-row gap-3 items-center">
        <img src="/icons/fake-profile.svg" className="h-8 w-8" />
        <div>
          <div className="font-bold text-sm">{name}</div>
          <div className="font-light text-xs">@{handle}</div>
        </div>
      </div>
      <div className="font-normal mt-4 text-sm">{text}</div>
    </div>
  );
}

export function TestimonialList() {
  return (
    <>
      <Testimonial
        name="Daniel Reese"
        handle="danielreese"
        text="Todo Wizard has truly transformed how I manage my tasks! With its intuitive interface and customizable features, I've never felt more organized and productive."
      />
      <BugWrapper id="32iogn32igonwoef" reason="Empty testimonial space">
        <div className="w-[20rem] md:w-[22rem]" />
      </BugWrapper>
      <Testimonial
        name="Samantha Smith"
        handle="samsmith"
        text="As a busy professional, I've tried numerous todo list apps, but Todo Wizard stands out above the rest."
      />
      <Testimonial
        name="John Doe"
        handle="samsmith"
        text="Todo Wizard has been a game-changer for me. With its sleek design and powerful features, I delve into it like no other app ever before."
      />
    </>
  );
}
