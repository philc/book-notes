* Gems
  * Each technical team is in one of four states, and there is a durable "system-fix" to implemented for
    progressing to the next, more positive state. Identifying and implementing is the manager's job.
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
