# An Elegant Puzzle - Will Larson

## Gems

* Each technical team is in one of four states, and there is a durable "system-fix" to progress to
  the next, more positive state. Identifying and implementing the appropriate fix is the manager's
  job.
* Growth plates vs. stable parts: different parts of the product or business can be in different
  phases: growing or stable. In the growing parts, execution is most valued; just capture the
  obvious growth. In the stable parts, new innovations and the ability to validate them are most
  valued, because growth there is harder.
* Consider an "ownership registry" so questions can immediately go to the right person. Similar to
  the solution of documenting "who's oncall?"
* Work the policy, not the exceptions
  * If everyone has to escalate to management to get optimal treatment, they will. Everything will
    become an exception. This is very inefficient.

## Intro

* "As I've become more experienced, my appreciation for management, and engineering management in
  particular, has grown, and I've come to view the field as a series of elegant, rewarding, and
  important puzzles. This book is a collection of those puzzles."
  * (Lovely framing for this work).

## Organizations (chap 2)

* Sizing teams is the fundamental challenge of org design.
* Managers should support 6 to 8 engineers.
* Managers of managers should support 4 to 6 managers.
* TLMs: typically manage 4 engineers. It has limited career growth, because to progress, they must
  either dedicate more time to management and become full time managers, or dedicate more time to IC
  work and lose or freeze their management load.
* Coaches: "managers with greater than 8 reports." They act as coaches and safety nets for problems.
  They have to operate shallow rather than deep because of their report count.
* Eng teams should be eight people
  * The primary reason for this is that oncall rotations want eight engineers, and it's most
    functional for an eng team to carry its own pager.
  * Rotations can be shared across teams, although most find being oncall for components they're
    unfamiliar with to be disproportionately stressful.
* "Small teams (fewer than four) are not teams"
  * Will has regretted forming these teams. Lumpy delivery, and fragile in the face of churn.
* "Keep innovation and maintenance together"
  * Avoids a two-class system.
  * It's difficult to execute.
  * To create a new team, grow an existing team to 8-10, and then split into two teams of 4-5.
* Four states of a team
  * Also described in this [short article](https://lethain.com/durably-excellent-teams/).
  * The four states:
    * Falling behind. Solution: add people
      * What about taking people from other teams? "I'm pretty negative on that... people are not
        fungible, and generally folks end up in useful places. By nature, it's also impossible for
        this discussion not to become political. So implement this system fix by adding *net new*
        people to the company."
    * Treading water. Solution: reduce work in progress
      * In this phase, the team is able to get the critical work done, but they're not paying down
        debt.
    * Repaying debt. Solution: add time
      * This is the turning point, because the benefits of debt repayment compounds, as each
        improvement you make provides more future time.
      * Once some debt gets repaid, the stakeholders will be hungry for more velocity, and more of
        their bandwidth to be spent on roadmap work. Allow this team enough space for the
        compounding to take some effect.
    * Innovating. Solution: add slack
  * Do the exercise of labeling which state each team is in, and how exactly to apply the fix
    dictated by the system.
  * "We reach for adding headcount too quickly."
  * Your job as a manager is to initiate the correct "system fix" to progress the team to the next,
    better state. Don't just support the team tactically. You won't have confidence that you'll ever
    get out of the current state. First, institute the system fix; then, support the team. This
    allows the fix to "work its magic."
  * These system fixes are slow to take effect, but durable.
  * Recommends focusing on one team at a time to get it into the "treading water" state, before
    focusing at all on the next team. Don't hire a cohort and distribute the heads evenly around the
    eng org. You want to have enough momentum to make the state transition.
  * Add new team members in batch
    * "Adding new individuals to a team disrupts that team's gelling process, so I've found it much
      easier to have rapid growth periods for any given team, followed by consolidation/gelling
      periods during which the team gels. The organization will never stop growing, but each team
      will."
    * (Interesting; I've always thought counter: make the growth smooth, so the team has enough
      bandwidth to mentor, prepare scoped work for the new engineers, give them enough mentoring
      attention, without severely disrupting the team's delivery or the team's existing culture.
      Perhaps batch-onboarding works on larger teams (7+), whereas at Liftoff we've always had smaller
      teams of 3-4).
* Should we disassemble a high-performing team to work on more pressing problems?
  * "Sustained productivity comes from high-performing teams, and disassembling a high-performing
    team leads to a significant loss of productivity, even if the members are fully retained. In
    this worldview, high-performing teams are sacred, and I'm quite hesitant to disassemble them."
  * It takes a long time for a team to reach a gelled state. Re-gelling can be expensive.
  * For existing products (and not product market fit finding startups), each eng team has high
    "fixed costs": required work to keep the lights on. This makes each eng team relatively
    sensitive to losing an engineer. 1-2 people can take the team's state back to "falling behind."
  * So, how to reassign resources? Leave people and teams in place, but incrementally shift
    responsibility.
    * "Shifting scope works better than moving people because it avoids re-gelling costs, and it
      preserves system behavior. Preserving behavior keeps your existing mental model intact, and if
      it doesn't work out, you can always revert a workload change with less disruption than would
      be caused by a staffing change."
* "More engineers, more problems"
  * The book provides some estimates of how the productivity of your trained engineers can erode to
    zero under conditions of high headcount growth, due to the crushing load of interviewing,
    training, oncall, overhead due to more teams, and new management layers.
* Ways to manage entropy
  * Interview load
    * Batch together the interviewing responsibility that engineers must do, and then give them a
      month off.
    * Focus hiring on one team until they hit 8 people, and then move on to another team.
  * Controlling the volume and sprawl of ad hoc interruptions
    * Second most effective time thief.
    * Funnel interruptions into an increasingly small area, and then automate that area as much as
      possible. Ask people to file tickets, create chatbots that automate filing tickets, create a
      cookbook for each service maintained, etc.
    * Add "answering questions" to your oncall's responsibility set.
    * Consider an "ownership registry" so questions can immediately go to the right person. Similar
      to the solution of documenting "who's oncall?"
    * He says "the best solution to frequent interruptions is a culture of documentation", although
      it sounds like he hasn't seen it actually work at scale.
* Managing "organizational risk"
  * It's organization debt that most likely becomes abruptly due.
  * Will minimizes this risk by stabilizing team-by-team, and org by org, before moving on, but this
    may spread him thin.
* Succession planning
  * After three years in a role, you're likely to switch. To do so successfully, document all of the
    gaps that would exist if you left, and fill them in. That will make the transition much easier.
  * "This isn't a one-time tool, but rather a great exercise to run once a year to identify things
    you could be delegating. This helps nurture an enduring organization, and also frees up time for
    you to continue growing into a larger role."

## Tools (chap 3)

* Intro to systems thinking
  * Causes of events are more subtle than they appear. They're the result of a system.
  * Stocks: quantities. The accumulation of events over time.
  * Flows: changes to stocks. They are rates. Inflows and outflows.
* Skepticism of guiding engineers through the standard career ladder
  * "Chasing the next promotion is at best a mark on a mass-produced treasure map."
  * Instead, try to go somewhere that's disproportionately valuable to you. What skills does this
    person want? Identify their gaps and work on those skills.
* His general outline for presenting to senior leadership
  * 1) Tie topic to business value. 1-2 sentences. Why should we care?
  * 2) Establish historical narrative. How things are going, how we got here.
  * 3) Explicit ask from the audience. 1-2 sentences.
  * 4) Data-driven diagnosis. A few paragraphs.
  * 5) Decision-making principles. Your mental model.
  * 6) What's next and when it will be done.
  * 7) Return to explicit ask.

## Approaches (chap 4)

* Work the policy, not the exceptions
  * If everyone has to escalate to management to get optimal treatment, they will. Everything will
    become an exception. This is very inefficient.
  * Good policy is opinionated. It's a small strategy.
  * "The fixed cost of creating and maintaining a policy is high enough that I generally don't
    recommend writing policies that do little to constrain behavior. In fact, that's a useful
    definition of bad policy. In such cases, I instead recommend writing norms, which provide
    nonbinding recommendations. Because they're nonbinding, they don't require escalations to
    address ambiguities or edge cases."
* Exception debt
  * It can be hard to uphold policy, because it often trades global efficiency for local
    inefficiency, and no individual cares about global efficiency. If you grant exceptions, they
    snowball and cause debt.
* Work the policy
  * Treat escalations as reality. Maybe your policy is unrealistic. These are test cases,
    opportunities for refinement.
  * Batching escalation handling:
    * "It's powerful because it creates a release valve for folks who are frustrated with rough
      edges in your current policies -- they're still welcome to escalate -- while also ensuring
      that everyone is operating in a consistent, fair environment; escalations will only be used as
      inputs for updated policy, not handled in a one-off fashion. The approach also maintains
      working on policy as a leveraged operation for leadership, avoiding the onerous robes of an
      exceptions judge."
    * When rolling out policy, declare a time at which point it will (maybe) be updated, given the
      escalations that have happened.
* People over process
  * In his experience, different process doesn't solve collaboration issues. The problem is the
    people.
* Do the hard thing now
  * Run towards the problems. They only get harder with postponement.
* Think for yourself
  * Be a chef rather than a cook. There's only so much you can take from other people's frameworks,
    because your circumstances are different.
* Managing through the "growth plates"
  * Growth plates: "Long bones have growth plates at their ends, which is where the growth happens;
    the middle of the bone doesn't grow."
  * Growth plates vs. stable parts: different parts of the product or business can be in different
    phases: growing or stable. In the growing parts, execution is most valued; just capture the
    obvious growth. In the stable parts, new innovations and the ability to validate them are most
    valued, because growth there is harder.
  * "The most confusing places to start are midsize, rapidly growing companies. That's because parts
    of the company are growing quickly, with an emphasis on execution, and other parts have largely
    stabilized, with ideas becoming the more valued currency." This might be a useful mental model
    when trying to understand why your behaviors might not be resonating in a new role.
  * "So often, we make solid executors responsible for slower-growth areas -- we need the innovators
    in the highest growth ones -- but the opposite tends to work better." Because slow-growth areas
    have already had the easy/obvious incremental improvements done by previous executors.
* Ways engineering managers get stuck
  * Optimizing locally: picking technologies that the company can't support, or building a product
    that puts you in competition with another team.
  * Not spending time building relationships. It is hard for your team to do the right things and
    get them out the door without a supportive social network.
  * Assuming that more hiring can solve every problem. "Adding a wonderful person can move the
    needle, but adding too many people can dilute your culture, and lead to people with unclear
    roles."
  * Not trusting people enough to delegate. "Many organizations become bottlenecked on approvals,
    which is a proxy for lack of trust."
* Finding managerial scope
  * Broadly three types of engineering management jobs:
    * Manager: you manage a team directly
    * Director: you manage a team of managers
    * VP: you manage an organization
  * Optimize for scope rather than org size.
    * Grow scope through "broad, complex projects"
    * "As managers... we should really be pursuing scope: not enumerating people but taking
      responsibility for the success of increasingly important and complex facets of the
      organization. This is where advancing your career can veer away from a zero-sum competition to
      have the largest team and evolve into a virtuous cycle of empowering the organization and
      taking on more responsibility."
    * "There is a lot less competition for hard work."
    * "You can always find an opportunity to increase your scope and learning, even in a company
      that doesn't have room for more directors or vice presidents."

## Culture (chap 5)

* Opportunity
  * "There are workplaces where everyone around you is delightful, the customers are friendly, and
    you feel respected, but you still return home each night dissatisfied."
  * This is because opportunity is lacking, interesting projects are rare, and you're unchallenged.
  * Fairness: basic recommendation is to make the distribution of limited opportunities (like cool
    projects, leadership, education training) a fair, transparent process.
* Membership
  * Tip: schedule in advance to eat lunch with a different coworker every day.
  * Blended chats: get two entire teams to go get coffee together.
* Selecting project leads
  * Avoid having the same handful of people lead all of the important projects: "I've come to
    believe that having a wide cohort of coworkers who lead critical projects is one of the most
    important signifiers of good organizational health."
  * Otherwise it damages your culture and eventually limits your bandwidth.
  * How to select project leads: spec the project's scope and time commitments and the selection
    criteria for selecting a lead; announce it; let people apply; select the person using the
    criteria; announce that decision.
  * "The first few times you do this, it will feel constraining and inefficient. Increasingly,
    though, I believe this is the most important change in my approach to leadership in the past few
    years. Done well, it can be the cornerstone in your efforts to grow an inclusive organization."

## Career (chap 6)

* Opportunities
  * Promise change, not necessarily growth. Working on a static team at a rocket ship company
    doesn't necessarily mean high career growth.
* Give interviewers a sabbatical so they don't burn out on interviewing. E.g. 1 month of
  interviewing, then 1 month off. Batching.
* Recruiting
  * Recommends eng managers do one hour a week of cold sourcing, to build empathy with the process
    and to encourage hands on changes to the recruiting process.
* Career ladders
  * Advises being tolerant of career ladder proliferation. But only spend time refining a ladder
    with > 10 people on it.
  * "One method for reducing the fixed cost of maintaining ladders is to establish a template and
    shared themes across every ladder."
  * Ladders tend to get a new level every 2 years.
  * "Crisp boundaries are important as they provide those on a ladder a useful mental model of where
    they are in their journey, who their peers are, and whom they should view as role models.
  * Every other activity of performance management builds on the ladders -- they're the foundation
    -- so they're worth doing well.
* Challenges
  * Class systems: folks often look at new role as less important, framing them as service roles to
    absorb work they're not interested in. Sometimes roles are even explicitly designed this way,
    intended to reduce work for another role as opposed to having an empowering mission on their
    own.
    * You must be able to frame the role's work without referencing other existing roles in order
      for it to succeed long-term. Roles should not be framed as support.
  * Brittle organization: As you move away from generalized roles and toward specialists (to gain
    efficiency), your organization becomes brittle because it more single points of failure.
