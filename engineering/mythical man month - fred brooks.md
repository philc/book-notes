* Gems
  * Completing a programming project: there's "quadratic rather than linear convergence to the end."
  * "Men and months are interchangeable commodities only when a task can be partitioned among many works *with
    no communication among them*. This is true of reaping wheat or picking cotton; it is not even
    approximately true of systems programming."
  * Brook's Law: Adding manpower to a late software project makes it later.
  * The number of minds coordinating to build a system determines the system debugging cost, because that
    phase is largely determined by miscommunication between many minds. So you want a system built by as few
    minds as possible.
  * Surgical team
    * Colorful analogy: "Each segment of a large job be tackled by a team, but that the team be organized like
      a surgical team rather than a hog-butchering team. That is, instead of each member cutting away on the
      problem, one does the cutting and the others give him every support that will enhance his effectiveness
      and productivity."
  * Differences in judgement among a team of equal stakes time to talk through. There are far fewer such
    differences on the surgical team.
* The tar pit (chap 1)
  * Tar pit: most teams building large systems become ensnared in a prehistoric tar pit -- getting more stuck
    and slower as the project progresses.
  * "The accumulation of simultaneous and interacting factors brings slower and slower motion."
  * Growing cost when producing the final product:
    * Going from a program -> a programming product incurs a 3x growth in complexity.
      * A programming product requires generalization of the feature set, testing, documentation, and ongoing
        maintenance.
      * This is the transition a program that was written for personal use undergoes before it's usable by the
        public, or open-sourced.
        * (I've seen this first hand -- it's a surprising amount of extra work to make my personal programs
          usable for other people)
    * Going from a program to a programming system incurs a 3x growth in complexity
      * A programming system is a collection of interfacing programs for large tasks. E.g. a distributed
        system, or a programming language toolchain.
      * The interfaces between each program must be rigorously defined.
    * So when going from a single program to a released programming system is about 9x as expensive as the
      first cut at the problem.
  * The joys of the craft
    * (Nice mini-essay on the joys of programming)
    * Sheer joy of making things
    * Pleasure of making things that are useful to other people
    * Fascination of fashioning a complex machine
    * Joy from learning
    * Delight of working in such a tractable (malleable) medium
    * "Programming is fun because it gratifies creative longings built deep within us and delights
      sensibilities we have in common with all men."
  * Woes of the craft
    * "Human beings are not accustomed to being perfect, and few areas of human activity demand it."
    * Completing a programming project: there's "quadratic rather than linear convergence to the end."
    * With software, there's a short time to obsolescence.
* The mythical man-month (chap 2)
  * Estimates embed the unvoiced assumption that "all will go well."
  * The gaps and inconsistencies of the idea only become visible in the implementation stage, rather in the
    design stage.
  * In other creative disciplines, difficulty expressing the idea -- the implementation phase -- is blamed on
    the medium, because it's intractable. Wood splits, paints smear. In programming, one cannot make this
    excuse.
  * "Men and months are interchangeable commodities only when a task can be partitioned among many works *with
    no communication among them*. This is true of reaping wheat or picking cotton; it is not even
    approximately true of systems programming."
  * Sequential constraints in the project prevent parallelism.
  * Time required is sub-linear with men because the cost of communication and training (for each person) must
    be added to the cost of the project.
  * If each person in each partition needs to join shared group meetings, the communication cost can explode.
  * "Failure to allow enough time for a system test, in particular, is peculiarly disastrous. Since the delay
    comes at the end of the schedule, no one is aware of schedule trouble until almost the delivery date."
  * Brook's Law: Adding manpower to a late software project makes it later.
  * The number of month hs a project will take depends on the number of sequential constraints.
  * The number of men a project can use depends on the number of independent subtasks.
* The surgical team (chap 3)
  * The phenomenon of 10x engineers has been "widely observed."
  * The number of minds coordinating to build a system determines the system debugging cost, because that
    phase is largely determined by miscommunication between many minds. So you want a system built by as few
    minds as possible.
  * "This then is the problem with the small, sharp team concept: it is too slow for really big systems."
  * (It seems to me you can achieve "conceptual integrity" by creating a handful of small, sharp 10-person
    teams and aggressively controlling for and minimizing the coordination cost. E.g. defining a rigid shared
    interface that allows for almost complete decoupling.)
  * Mill's proposal: organize each team within a group like a surgical team
    * A 10 person team where each role is highly specialized and the software is only really designed and
      built by one mind.
    * Colorful analogy: "Each segment of a large job be tackled by a team, but that the team be organized like
      a surgical team rather than a hog-butchering team. That is, instead of each member cutting away on the
      problem, one does the cutting and the others give him every support that will enhance his effectiveness
      and productivity."
  * Possible support roles:
    * Clerk: this was useful back at the time of writing: someone who maintains files. Like fixtures and logs?
      Repro cases from customers?
    * Toolsmith: maintainer of the tools, which are inevitably highly specialized.
    * Language lawyer: the consultant who can provide advice on idioms to use. A code reviewer?
    * Copilot / chief of staff: someone who the surgeon communicates with, who can then fan out the
      communication to the rest of the team members. This greatly reduces the number of communication edges
      connected to the surgeon.
  * How it works: one, or at most two, minds are at work on the problem, ensuring the conceptual integrity of
    the work. The rest of the team supports those people.
  * Differences in judgement among a team of equal stakes time to talk through. There are far fewer such
    differences on the surgical team.
  * Brooks argues that this model works, but can only handle small-scoped projects. How can it be scaled
    further?
* Aristocracy, democracy, and system design (chap 4)
  * On cathedrals as art: "It is the zenith of a style, the work of artists who had understood and assimilated
    all their predecessors' successes, in complete possession of the techniques of their times, but using them
    without indiscreet display nor gratuitous feats of skill."
  * The design of the church of Reims: "this integrity was achieved by th self-abnegation of eight generations
    of builders, each of whom sacrificed some of his ideas so that the whole might be of pure design. The
    result proclaims not only the glory of God, but also His power to salvage fallen men from their pride."
  * Argues that conceptual integrity is the most important property in system design. More than the feature
    set. "Many authors" results in "many uncoordinated ideas."
  * Classic tradeoff of whether to adopt another programming language on top of the one you know:
    * "Ease of use is enhanced only if the time gained in functional specification exceeds the time lost in
      learning, remembering, and searching manuals."
  * "The architect of a system, like the architect of a building, is the user's agent."
  * "Good features and ideas that do not integrate with a system's basic concepts are best left out. If there
    appear many such important but incompatible ideas, one scraps the whole system and starts again on an
    integrated system with different basic concepts."
  * Do the architects form a design aristocracy?
    * "If a system is to have conceptual integrity, someone must control the concepts. That is an aristocracy
      that needs no apology."
  * "Setting of external specifications is not more creative work than designing of implementation."
    * The implementer can set key qualities like the cost-performance ratio.
  * He describes the architect as the one who carefully designs the "what", to be handed off to an implementer
    who figures the "how". Like a PM + dev lead.
  * "I observe that the external provision of an architecture enhances, not cramps, the creative style of an
    implementing group. They focus at once on the part of the problem no one has addressed, and inventions
    begin to flow."
  * Argues that we should not compromise the system architecture by delegating some of its design to the
    implementers, nor should we care if those people have to sit idle while the architecture completes.
    Similar to designing a building.`"
  * "A widespread horizontal division of labor has been sharply reduced by a vertical division of labor."
  * So: design as much as you can with a single mind, support them, and repeat this for each module and hope
    that the coupling is loose.
* The second-system effect (chap 5)
  * "An architect's first work is apt to be spare and clean. He knows he doesn't know what he's doing, so he
    does it carefully and with great restraint."
  * "The second is the most dangerous system a man ever designs."
* Plan to throw one away (chap 11)
  * Chemical engineers build a pilot plant to debug issues arising during the transition from lab to factory.
  * He argues that building a large system the first time will produce a subpar production which should be
    rewritten given the lessons of the first attempt.
  * Job ladders
    * Dual ladders allow ICs to remain ICs
    * Regarding managers getting more prestige: "to overcome this problem, some laboratories, such as Bell
      Labs, abolish all job titles. Each professional employee is a 'member of the technical staff.'"
    * Announce transitions from one ladder to the other as a reassignment, not a promotion, to avoid
      imbalanced prestige.`
  * The surgical team format explicitly allows the senior IC to remain incredibly impactful
    * "The whole notion of organizing surgical-type programming teams is a radical attack on this problem. It
      has the effect of making a senior man feel that he does not demean himself when he builds programs, and
      it attempts to remove the social obstacles that deprive him of that creative joy."
    * "That structure is designed to minimize the number of interfaces. As such, it makes the system maximally
      easy to change, and it becomes relatively easy to reassign a whole surgical team to a different
      programming task when organizational changes are necessary. It is really the long-run answer to the
      problem of flexible organization."
* No silver bullet -- essence and accident in software engineering (chap 16)
  * Thesis: "There is no single development, in either technology or management technique, which by itself
    promises even one order-of-magnitude improvement within a decade in productivity, in reliability, in
    simplicity."
  * Essential tasks vs. accidental tasks: accidental tasks include mapping the solution and abstract concepts
    to code, and dealing with machine constraints.
  * Each solution has an "irreducible essence."
  * In software, complexity arises because every part is different from every other part, unlike a building.
    And a program is capable of a tremendous number of states.
  * "Many of the classical problems of developing software products derive from this essential complexity
    and its nonlinear increases with size."
  * Complexity in physics vs. complexity in software development:
    * "No such faith comforts the software engineer. Much of the complexity he must master is arbitrary
      complexity, forced without rhyme or reason by the many human institutions and systems to which his
      interfaces must conform. These differ from interface to interface, and from time to time, not because of
      necessity but only because they were designed by different people, rather than by God."
  * Software often has to conform to arbitrary external interfaces because it's the most recent on the scene,
    and because it's the most malleable medium.
  * He argues that past productivity breakthroughs solved accidental difficulties, not essential ones.
  * There are diminishing productivity gains from each new high-level language.
  * "The development of a market": making it easier to use or buy existing software does reduce effort on the
    essential problems.
  * "The hardest single part of building a software system is deciding precisely what to build."
    * Get a high quality definition through "iterative extraction": first discovering the right questions to
      ask, then the right answers, then the right solution.
  * "It is really impossible for clients, even those working with software engineers, to specify completely,
    precisely, and correctly the exact requirements of a modern software product before having built and tried
    some versions of the product they are specifying."
  * Jones's Point -- productivity follows quality
    * Focus on quality, and productivity will follow. Avoiding lumbering systems and design bugs also avoids
      schedule disasters late in development.
    * (From chap 17, "No Silver Bullet Refired")
* The Mythical Man Month after 20 years (chap 19)
  * "There are many examples of elegant software products designed by a single mind, or by a pair. Most purely
    intellectual works such as books or musical compositions are so produced."
  * Argues that it's hard for software to afford their "straightforward approach" to conceptual integrity that
    other creative disciplines use, because software projects grow to become huge, and there's intense
    competition that creates urgency.
  * "Managing large programming projects is qualitatively different from managing small ones, just because of
    the number of minds involved."
  * "Recursion of architects"
    * "For quite large products, one mind cannot do all of the architecture, even after all implementation
      concerns have been split off. So it is necessary for the system master architect to partition the system
      into subsystems."
  * "Today I am more convinced than ever. Conceptual integrity is central to produce quality."
  * (By architect it sounds like he means product manager: one mind that's responsible for the public mental
    model of the product, and serves as the user agent.)
