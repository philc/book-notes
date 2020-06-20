* Gems
  * Each technical team is in one of four states, and there is a durable "system-fix" to implemented for
    progressing to the next, more positive state. Identifying and implementing is the manager's job.
  * Growth plates vs. stable parts: different parts of the product or business can be in different phases --
    growing or stable. Execution is most valued in the growing parts -- just capture the obvious growth. In
    contrast, new innovations and the ability to validate them are most valued in the stable parts, because
    growth is harder.
* Intro
  * "As I've become more experienced, my appreciation for management, and engineering management in
    particular, has grown, and I've come to view the field as a series of elegant, rewarding, and important
    puzzles. This book is a collection of those puzzles." (Nice framing for this work).
* Organizations (chap 2)
  * Sizing teams is the fundamental challenge of org design.
  * "Managers should support 6 to 8 engineers."
  * TLMs: typically manage 4 engineers. It has limited career growth, because to progress, they must either
    dedicate more time to management and become full time managers, or dedicate more time to IC work and lose
    or freeze their management load.
  * Coaches: "managers with greater than 8 reports." They act as coaches and safety nets for problems. They
    have to operate shallow rather than deep because of their report count.
  * "Managers of managers should support four to six managers."
  * Eng teams should be eight
    * The primary reason for this is that oncall rotations want eight engineers, and it's the most functional
      for an eng team to carry its own pager.
    * Rotations can be shared across teams, although most find being oncall for components they're unfamiliar
      with to be disproportionately stressful.
  * "Small teams (fewer than four) are not teams"
    * He's regretted forming these teams. Lumpy delivery, fragile in the face of churn.
  * "Keep innovation and maintenance together"
    * It's good for more. Avoids a two-class system. Difficult.
    * To create a new team, grow an existing team to 8-10, and then split into two teams of 4-5.
  * Four states of a team
    * The four states:
      * Falling behind. Solution: add people
        * What about taking people from other teams? "I'm pretty negative on that... people are not fungible,
          and generally folks end up in useful places. By nature, it's also impossible for this discussion not
          to become political. So implement this system fix by adding *net new* people to the company."
      * Treading water: reduce WIP
        * Able to get the critical work done, but not paying down debt.
      * Repaying debt: add time
        * This is the turning point, because the benefits of debt repayment compounds, as each improvement you
          make provides more future time.
        * Once some debt gets repaid, the stakeholders will be hungry for more velocity, and more of their
          bandwidth to be spend on roadmap work. Allow this team enough space for the compounding to take
          effect.
      * Innovating: add slack
    * Do the exercise of labeling which state each team is in, and how exactly to apply the fix dictated by
      the system.
    * "We reach for adding headcount too quickly."
    * Your job as a manager is to initiate the correct "system fix" to progress the team to the next, better
      state. Don't just support the team tactically; you won't have confidence that you'll ever get out of the
      current state. First, institute the system fix, then support the team, to allow the fix to "work its
      magic."
    * These system fixes are slow to take effect, but durable.
    * Recommends focusing on one team at a time to get it into the "treading water" state, before focusing at
      all on the next team. Don't hire a cohort and distribute the heads evenly around the eng org. You want
      to have enough momentum to make the state transition.
    * Add new team members in batch
      * "Adding new individuals to a team disrupts that team's gelling process, so I've found it much easier
        to have rapid growth periods for any given team, followed by consolidation/gelling periods during
        which the team gels. The organization will never stop growing, but each team will."
      * (Interesting; I've always thought counter: make the growth smooth, so the team has the bandwidth to
        mentor, prepare enough scoped work for the new engineers, given them enough mentoring attention,
        without severely disrupting the team's delivery, or the existing culture. Maybe batch-onboarding works
        on larger teams (7+), whereas at Liftoff we've always had smaller teams of 3-4).
  * Should we disassemble a high-performing team to work on more pressing problems?
    * "Sustained productivity comes from high-performing teams, and disassembling a high-performing team leads
      to a significant loss of productivity, even if the members are fully retained. In this worldview,
      high-performing teams are sacred, and I'm quite hesitant to disassemble them."
    * It takes a long time for a team to reach a gelled state. Re-gelling can be expensive.
    * For existing products (and not product market fit finding startups), each eng team has high "fixed
      costs": required work to keep the lights on. This makes each eng team relatively sensitive to losing an
      engineer. 1-2 people can take the team's state back to "falling behind."
    * So, how to reassign resources? Leave people and teams in place, but incrementally shift responsibility.
      * "Shifting scope works better than moving people because it avoids re-gelling costs, and it preserves
        system behavior. Preserving behavior keeps your existing mental model intact, and if it doesn't work
        out, you can always revert a workload change with less disruption than would be caused by a staffing
        change."
  * "More engineers, more problems"
    * The book provides some estimates of how the productivity of your trained engineers can erode to zero
      under conditions of high headcount growth, due to the crushing load of interviewing, training, oncall,
      more teams, and new management layers.
  * Ways to manage entropy
    * Interview load
      * Batch together the interviewing responsibility that engineers must do, and then give them a month off.
      * Focus hiring on one team until they hit 8 people, and then move on to another team.
    * Controlling the volume and sprawl of ad hoc interruptions
      * Second most effective time thief.
      * Funnel interruptions into an increasingly small area, and then automate that area as much as possible.
        Ask people to file tickets, create chatbots that automate filing tickets, create a service cookbook,
        etc.
      * Add "answering questions" to your oncall's responsibility set.
      * Consider an "ownership registry" so questions can immediately go to the right person. Similar to the
        solution of documenting "who's oncall?"
      * He says "the best solution to frequent interruptions is a culture of documentation", although it
        sounds like he hasn't seen it actually work at scale.
  * Managing "organizational risk"
    * It's organization debt that most likely becomes abruptly due.
    * He minimizes this risk by stabilizing team-by-team, and org by org, before moving on and spreading
      himself thin.
  * Succession planning
    * After three years in a role, you're likely to switch. To do so successfully, document all of the gaps
      that would exist if you left, and fill them in. That will make the transition much easier.
      * "This isn't a one-time tool, but rather a great exercise to run once a year to identify things you
        could be delegating. This helps nurture an enduring organization, and also frees up time for you to
        continue growing into a larger role."
* Tools (chap 3)
  * Intro to systems thinking
    * Causes of events are more subtle than they appear. They're the result of a system.
    * Stocks: quantities. The accumulation of events over time.
    * Flows: changes to stocks. They are rates. Inflows and outflows.
  * Skepticism of guiding engineers through the standard career ladder
    * "Chasing the next promotion is at best a market on a mass-produced treasure map."
    * Instead, try to go somewhere that's disproportionately valuable to you. What skills does this person
      want? Identify their gaps and work on those skills.
  * His general outline for presenting to senior leadership
    * 1) Tie topic to business value. 1-2 sentences. Why should we care?
    * 2) Establish historical narrative. How things are going, how we got here.
    * 3) Explicit ask from the audience. 1-2 sentences.
    * 4) Data-driven diagnosis. A few paragraphs.
    * 5) Decision-making principles. Your mental model.
    * 6) What's next and when it will be done.
    * 7) Return to explicit ask.
* Approaches (chap 4)
  * Work the policy, not the exceptions
    * If everyone has to escalate to management to get optimal treatment, they will. Everything will become an
      exception. This is very inefficient.
    * Good policy is opinionated. It's a small strategy.
    * "The fixed cost of creating and maintaining a policy is high enough that I generally don't recommend
      writing policies that do little to constrain behavior. In fact, that's a useful definition of bad
      policy. In such cases, I instead recommend writing norms, which provide nonbinding recommendations.
      Because they're nonbinding, they don't require escalations to address ambiguities or edge cases."
  * Exception debt
    * It can be hard to uphold policy, because it often trades global efficiency for local inefficiency, and
      no individual cares about global efficiency. If you grant exceptions, they snowball and cause debt.
  * Work the policy
    * Treat escalations as reality. Maybe your policy is unrealistic. These are test cases, opportunities for
      refinement.
    * Batching escalation handling:
      * "It's powerful because it creates a release valve for folks who are frustrated with rough edges in
        your current policies -- they're setill welcome to escalate -- while also esnuring that everyone is
        operating in a consistent, fair environment; escalations will only be used as inputs for updated
        policy, not handled in a one-off fashion. The approach also maintains working o npolicy as a leveraged
        operation for leadership, avoiding the onerous robes of an exceptions judge."
      * When rolling out policy, declare a time at which point it will (maybe) be updated, given the
        escalations that have happened.
  * People over process
    * In his experience, different process doesn't solve collaboration issues. The problem is the people.
  * Do the hard thing now
    * Run towards the problems. They only get harder with postponement.
  * Think for yourself.
    * Be a chef. There's only so much you can take from other people's frameworks, because your circumstsances
      are different.
  * Managing the growth plates
    * In the growth plates of a company, execution is most valued: there's a long list of fairly obvious,
      rewarding ideas. On the stable parts, ideas are more valuable, and the ability to validate them.
    * Growth plates vs. stable parts: different parts of the product or business can be in different phases --
      growing or stable. Execution is most valued in the growing parts -- just capture the obvious growth. In
      contrast, new innovations and the ability to validate them are most valued in the stable parts, because
      growth is harder.
    * "The most confusing places to start are midsize, rapidly growing companies. That's because parts of the
      company are growing quickly, with an emphasis on execution, and other parts have largely stabilized,
      with ideas becoming the more valued currency. Long bones have grwoth plates at their ends, which is
      where the growth happens, and the middle doesn't grow." This might be a useful mental model when trying
      to understand why your behaviors might not be resonating in a new role.
    * "So often, we make solid executors responsible for slower-growth areas -- we need the innovators in th
      ehighest growth ones -- but the opposite tends to work better." Because slow-growth areas have already
      ahd the easy/obvious incremental improvements done by previous executors.
  * Ways engineering managers get stuck
    * Optimize locally: picking technologies that the company can't support, or building a product that puts
      you in competition with another team.
    * Don't spend time building relationships." It is hard for your team to do the right things and get them
      out the door without a supportive social network.
    * Assume that more hiring can solve every problem. "Adding a wonderful person can move the needle, but
      adding too many people can dilute yoru culture, and lead to people with unclear roles."
    * Don't trust people enough to delegate. "Many organizations become bottlenecked on approvals, which is a
      proxy for lack of trust."
  * Finding managerial scope
    * Broadly three types of engineering management jobs:
      * Manager: you manage a team directly
      * Director: you manage a team of managers
      * VP: you manage and organization
    * Optimize for scope rather than org size.
      * Grow scope through "broad, complex projects"
      * "As managers... we should really be pursuing scope: not enumerating people but taking responsibility
        for the success of icnreasingly important and complex facets of the organization. This is where
        davancing your career can veer away from a zero-sum competition to have hte largest team and evolve
        into a virtuous cycle of empowering the organization and taking on more ersponsibility."
      * "There is a lot less competition for hard work."
      * "You can always find an opportunity to increase your scope and learning, even in a company that
        doesn't have room for more directors or vice presidents."
* Culture (chap 5)
  * Opportunity
    * "There are workplaces where everyone around you is delightful, the customers are friendly, and you feel
      respected, but you still return home each night dissatisfied."
    * This is because opportunity is lacking, interesting projects are rare, and you're unchallenged.
    * Fairness: basic recommendation is to make the distribution of limited opportunities (like cool projects,
      leadership, education training) a fair, transparent process.
  * Membership
    * Tip: schedule in advance to eat lunch with a different coworker every day.
    * Blended chats: get two entire teams to go get coffee together.
