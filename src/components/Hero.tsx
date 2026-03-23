export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[600px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/hero.jpg')",
          // "url('https://images.unsplash.com/photo-1696041757950-62e2c030283b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGhhbmRzJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzc0MTE5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
          Beacon of Transformative and Inclusive Development Center
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8">
          Transforming lives and building inclusive, resilient communities
          through sustainable development.
        </p>
        <a
          href="#what-we-do"
          className="inline-block bg-[#068c09] hover:bg-[#0c6708] text-white px-8 py-3 rounded-lg transition-colors"
        >
          Discover Our Work
        </a>
      </div>
    </section>
  );
}
