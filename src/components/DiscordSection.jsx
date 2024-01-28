export default function DiscordSection({ children }) {
  return (
    <section className="">
      <div className="flex justify-center items-center h-fit">{children}</div>
    </section>
  );
}

/*
 <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
*/
