type Props = {
  section: { title: string; description: string };
};

function StaticSection({ section }: Props) {
  return (
    <section className="flex relative flex-col items-center w-[80%] p-12 mt-36 border overflow-hidden rounded-2xl border-white/40 backdrop-blur-xl bg-white/3 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold mb-4 w-full text-outline opacity-70 flex justify-start">
          {section.title}
        </h2>
        <p className="text-sm opacity-90 font-[Nunito] leading-relaxed">
          {section.description}
        </p>
      </div>
    </section>
  );
}

export default StaticSection;
