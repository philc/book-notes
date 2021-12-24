* Gems
  * "Extractive contributions are those where the marginal cost of reviewing and merging that contribution
    is greater than the marginal benefit to the project's producers."
  * Argues that OSS should be like a one-way mirror: work is done in public and everything can be downloaded
    (consumed), but interacting with the maintainer (and appropriating their attention) cannot be done by
    random viewers in the stadium -- only by trusted members of the project's community.

* Intro
  * The crash in open source that halted the euphoric explosion of information and connectivity:
    * "Our online public lives became too much to handle, causing many of us to shrink back into our private
      spheres."
    * "Too many emails made us not want to answer. We were, effectively, DDoSing one another."
  * "The cycle looks something like this: Open source developers write and publish their code in public. They
    enjoy months, maybe years, in the spotlight. But, eventually, popularity offers diminishing returns. If
    the value of maintaining code fails to outpace the rewards, many of these developers quietly retreat to
    the shadows."
  * The popular wisdom is that the solution for maintainer burnout is to bring on more contributors. OSS is
    built by communities, right? But these calls for help often attract low-quality contributors, creating
    more -- and undesirable << work for the maintainer.
  * At Github, the author learned that it's a small core that maintains software, not communities. Most
    contributors offer only one change to the project.
  * Maintainers have evolved to be curators.
    * "these maintainers are defined by the need for curation: sifting through the noise of interactions, such
      as user requests, bug reports, and feature requests, which compete for their attention."
    * Community interactions are reactive tasks; writing code is a proactive task.
  * The problem maintainers now need to solve is how to direct the high volume of interactions, not how to
    onboard more people to write code.
  * Open source transitioned from small internet to big internet
    * OSS creators are like other creators on social media. The audience is large, and the audience doesn't
      really help the creator create.
    * "Creators now reach a much bigger potential audience, but these relationships are fleeting, one-sided,
      and often overwhelming."
* The structure of an open source project (chap 2)
  * Community interactions get "noisier" as the project scales --there's less time spent on pushes and PRs. At
    some point the maintainer spend more time on non-code work than code work.
  * To handle the growth, a maintainer must perform increasingly aggressive filtering of the inbound
    interactions, or distribute the load by recruiting more maintainers.
  * Developing is fun; closing issues and answering questions is generally not.
  * Popular projects have a bystander effect among users.
  * There are four types of projects:
    * Federations: high contributor growth, high user growth (e.g. Rust)
    * Clubs: high contributor growth, low user growth (e.g. Astropy)
    * Toys: low contributor growth, low user growth (e.g. ssh-chat)
    * Stadiums: low contributor growth, high user grwoth (e.g. Babel)
  * Federations
    * Function like a bazaar. Rare, high-functioning project.
    * Lots of mindshare. Behave like companies, with explicit governance.
    * Examples: Rust, Node.js, Linux.
    * Having very few people manage PR merges can become a bottleneck. Node.js experimented with "optimistic
      merging." It gives new devs room to spread their wings and quickly grow their contributions.
  * Clubs
    * Many users are also contributors. Common in niche or very technical tools.
    * "Clubs are similar to meetup or hobby groups: they attract a narrow group of users, who then also become
      contributors because they have higher context for the project's activity and feel a sense of affinity to
      the group. Clubs may not have a wide reach, but they're loved and built by a group of enthusiasts."
    * Sticky (long retention of maintainers), but not magnetic (low attraction of new maintainers).
  * Toys
    * Personal projects. May be popular and cool, but no one is relying on them. Like tech demos.
  * Stadiums
    * Few maintainers, highly centralized stewardship.
    * This model is becoming increasingly common.
    * Structure encourages one-to-many, rather than many-to-many, interaction patterns.
  * "If we think about who supplies labor to an open source project, it's 'expensive' to onboard new
    maintainers, because maintenance often requires knowledge that isn't easily externalized to others. So
    newcomers tend to make casual contributions, instead of pitching in on more complex tasks around project
    management."
  * "By making it easier to contribute, or reducing technical scope, maintainers might move their projects
    from a stadium to a federation model."
  * Node.js's strategy on attracting new contributors:
    * "The purpose of Node.js's contribution policy is to gain contributors, to retain them as much as
      possible, and to use a much larger and growing contributor base to manage the corresponding influx of
      contributions... avoid creating big decision hierarchies. Instead, invest in a broad, growing and
      empowered contributorship that can make progress without intervention."
  * "Centralized communities operate on the basis of limited attention. As proprietors of their communities,
    creators must manage user demand on their own. As a result, they tend to rely more heavily on automation,
    distributed user-to-user support, and the aggressive elimination of noise. While all popular projects
    utilize these approaches, they're a necessity for stadiums."
* Roles, incentives, and relationships (chap 3)
  * Argues that if individuals are motivated to do something, coordrination costs are lower.
    * "Unlike companies -- which need to solicit, evaluate, hire, and manage employees -- the memers of a
      commons simply self-organize based on who wants to do the work most."
  * The required ingredients for strangers to collaborate on open source projects
    * "A few conditions that Benkler identifies as necessary to pull of commons-based peer production are
      intrinsic motivation, modular and granular tasks, and low coordination costs."
    * Modular and granular, so the barrier to entry is low, and so the scope is small. Like the Unix
      aesthetic.
  * Keeping coordination costs low is difficult. Coordination work is usually not intrinsically motivated.
    (could it be?)
    * "A maintainer's biggest coorrdination costs come from reviewing and merging new contributions, so
      there's an incentive to keep these costs low. When the costs of coordrination outpace the benefits, the
      commons breaks down as a useful production model."
  * "Although the commons might not be as profitable as the firm, it's also more resilient, because the
    currency of its transactions is the desire to participate, rather than money."
  * "Money and open source don't mix." The presence of an extrinsic motivator displaces the internal ones,
    which are key for making the volunteer commons model work.
  * The "stadiums", which are now more common, don't resemble the commons model, or work the same way.
    * "Decentralized communities prioritize work based on abundance of attention: encouraging new
      contributors, developing governance processes, and improving engagement and retention. But a creator
      prioritizes work based on scarcity of attention: saying no to contributorrs, closing out issues,
      reducing user support. While the commons is tasked with resolving *coordination* issues, creators are
      defined by the need for *curation*."
  * (Were commons just a temporary phenomenon? It's intuitive tha ta big project would be driven by a couple
    of high-leverage engineers (the maintainers), not hundreds of minor contributorrs. Maybe in the early days
    of open source, the population using it was mostly 10x engineers, given how niche it was.)
  * How platforms broke apart the commons
    * Github created a highway where it was easy to discover what else was out there, and lowered the barrier
      to contributing. Also, it made everything look homogenous.
  * "Eternal September"
    * "Once America Online (a sort of early highway system itself) began offering access to Usenet, the
      service provider exposed the community to a constant stream of new users, creating an 'eternal
      September.'" (where eternal September is like the newbie class starting in school for the first time)
    * In OSS, "because newcomers have not yet developed commitment to the group and have not yet learned how
      the group operates, it is rational for established group members to distrust them."
  * How can you prevent outsiders from derailing your community with requests which don't reflect the
    established norms? How can you even label them as outsiders, when OSS is open to all?
  * "When it's unclear where to draw community boundaries, voting systems don't work very well, because
    there's no way to know whether those votes are representative of the total population."
    * (Discusses possibly an open forum and thorough discussion process, but not dictation from a leader, and
      also not a wide vote.)
  * "Creation is an intrinsic motivator, maintenance usually requires extrinsic motivation." - @Balupton.
  * "A proposed contribution might seem like a good idea on its own, but it's the maintainer who must tend it,
    long after the contributor is gone. If the contribution is expensive to maintain, or doesn't fit the
    overall vision of the project, they might decide the cost is not worth it."
  * Only maintainers are interested in the success of the whole project, rather than special interests.
  * Author vs. maintainer
    * Original author/contributor. Probably the role with the highest impact to time ratio.
    * "Handing over the reins of a project is a natural part of a successful project." - Andrey Petrov
    * "Some developers love to make things, but they don't like maintaining them. Functionally, the work
      required by these two roles is quite different."
  * The dream is to find someone who likes the role of maintainer, and the author can pair with them as
    co-maintainers.
    * "the person I spoke to loves organizing, curating, and rigorously applying process." - one maintainer
      about a partner
  * Maintenance cost grows over time, it's not usually intrinsically motivating for developers, and the
    extrinsic motivators flatten out."
    * "As the project matures, reputational benefits flatten out: after all, the authors are already known for
      their affiliation to the project, and spending more time on its maintenance isn't going to change that.
      At the same time, reactive work may start to overtake the proactive tasks, while providing neither
      intrinsic nor extrinsic benefits. This phase of hte project is like rading through an ever-growing
      comments section: maintainerrs experience diminishing reteurns on the marginal value of reviewing
      additional contributions. Eventually, the value derived from new contributors might not exceed the cost
      of sifting through contributions."
    * Why do maintainers stick with a project if they don't enjoy it? "They might cite feelings of obligation,
      community, or helping others as reasons for looking after the project."
  * "The original author, like a miner who's delved into an ore deposit until it's depleted, may have reaped
    all the associated status gains from creating the project, leaving nothing behind for the next maintainer.
    There are many more orphaned projects than there are developers clamoring to become maintainers."
  * Active vs. casual contributors
    * "An active contributor is often motivated by a desire for community, but they might have secondary
      motivations around reputation and learning. They enjoy the social aspects of the project and want to
      feel as if they're 'part of something'".
  * Casual contributors
    * They're transactional. The main difference between them and active contributors is that one is
      elf-oriented, the other community-oriented.
    * "Whereas active contributors show interest in adding value to others early on, casual contributors
      demonstrate an acute, personal need at the outset."
    * "They represent the inverse of the maintainers' linchpin status: many in number, but little aggregate
      value."
    * Github has created the ideal conditions for the number of casual contributors to increase.
    * "Casual contributors can be overwhelming, like too many tourists flooding into a town." High volume,
      unpredictable quality.
    * "A maintainer must manage their relationship with casual contributors in order to retain enthusiasm
      for a project."
* The work required by software (chap 4)
  * Greenfield projects are coveted
    * "Most of hte work that software developers do is not writing new code, but rather tending to the code
      that someone else has written."
    * Software regularly gets rewritten every few years, especially if its surrounding context is changing
      quickly.
  * OSS projects can be either static or living.
    * "Code, while it's being traded, appraised, or exchanged, assumes its static form, with all the
      properties that we'd expect of a commodity. But once it finds users, code springs to life, switching to
      an active state and incurring hidden costs."
  * OSS is like "free as in puppy." The software gets older, is less exciting, and has needs that increase
    with time.
  * "In reality, a widely used project makes itself unforkable because it's become more than just the code."
  * "Software incurs ongoing maintenance costs, but marginal (costst hat are a function of its users) and
    temporal (entropy, or costs associated with decay over time)."
  * Software has zero marginal cost?
    * Sofwtare has zero marginal costs only in its static state. In an active state, the support required for
      additional users is a substantial cost (i.e. user support costs).
  * Temporal costs
    * "It's not just code itself that requires maintenance either, but all the supporting knowledge that
      surrounds it. When code changes, its documentation must also change. The most upvoted answers on a Q&A
      site eventually become outdated and incorrect. Programming books and videos eventually require
      revisions."
  * Technical debt
    * Incremental piece-meal evolution by a myrand of contributors inevitably adds cruft.
      * "Code is 'cleanest' when it's first released, becuase that's the time at which developers are thinking
        about the project holistically and writing it from scratch."
    * OSS is more susceptible to technical debt and scope creep because contributors are casual and don't have
      full context on the project.
    * Test infrastructure and test suites are particularly prone to technical debt, in the form of coarse
      tests, flaky tests, slow tests.
  * Adapting to user needs
    * User needs change over time and remaining relelvant requires changing to meet those needs, sometimes
      with a completely different approach.
    * Sometimes it's best for both the maintainer and the ecosystem to deprecate a package and stop
      maintaining it, so newer solutions have room to thrive.
  * "A developer might gain reputational benefits from creating a popular project, but those benefits are
    usually short-lived compared to the long-term costs of maintenance."
    * This creates an ongoing tension between produce and consumer.
  * On dependencies
    * "Developers are finicky consumers. Not only are they discerning, with a high degree of sensitivity to
      slight differences between open source projects, but if they don't like the options presented to them,
      they're frequently inspired -- and have the ability -- to try making their own version. By contrast, if I
      need to buy a table for my home but don't like any of my options, it's unlikely that I'd try to build my
      own table from scratch.
      * And creating something new is intrinsically motivating, so if you're trying to make popular a new
        library you've built, you're selling against that dynamic. This dynamic of developer preferences makes
        most libraries easily substituble.
    * "If open source code is like infrastructure, we want to measure its value based on a combination of
      dependencies (who usese the code?) and substituability (if this code disappeared, how hard would it be to
      replace?)."
* Managing the costs of production (chap 5)
  * Public goods: "The two main criteria that distinguish a public good are that it must be non-rivalrous and
    non-excludable. Non-rivalrous means that the goods do not dwindle in supply as more people consume them;
    non-excludability means that the good is available to all citizens."
  * Argues that public goods require governments to produce them in the physical world. Online, they can be
    produced by individuals (e.g. OSS, blogs), because they are cheap to make and people have intrinsic
    motivation to express themselves, and are thus OK giving them away for free. It's like an art expo or
    talent show in the physical world. Or how people put up Christmas lights for free, to express themselves,
    and for their neighbors to enjoy.
    * We want to share what we make to have that part of us understood by others.
  * Maybe we're over producing software and online writing, and consumers treat it like everything is highly
    substituable and worth nothing, and they demand things of the producers that they have no real right to.
  * Participation
    * "Much of the fatigue that open source developers experience comes not from making their code public but
      from expectations around making their code participatory."
    * "Open source code, in static state, is a public good, meaning that it is both non-excludable and
      non-rivalrous. Like my neighbor's Christmas decorations, if it can be consumed at nearly zero margincal
      cost we should just let people have it.
    * "The *production* of open source code, however, functions more like a commons -- meaning that it is
      non-excludable and rivalrouds -- where *attention* is the rivalrous resource. Maintainers can't stop
      users from bidding for their attention."
      * And maintainers allocate a limited amount of attention to a project, and so users must compete for it.
  * This is akin to executives: they must allocate their limited attention carefully, and if any employee or
    customer can demand and direct their attention, they will be less efective and suboptimally leveraged.
  * One-way mirror
    * Argues that OSS should be like a one-way mirror: work is done in public and everything can be downloaded
      (consumed), but interacting with the maintainer (and appropriating their attention) cannot be done by
      random viewers in the stadium -- only by trusted members of the project's community.
    * When attention is is being appropriated, the producer must ensure it's net positive.
    * "Extractive contributions are those where the marginal cost of reviewing and merging that contribution
      is greater than the marginal benefit to the project's producers."
      * E.g. PRs that are unwieldy and difficult to review; events which require too much resources from the
        producers.
      * "The most common forms of extractive contributions are comments, questions, and feature requests."
      * "Sometimes feature requests, questions, and high-energy discussions lead the project in new,
        worthwhile directions, but quite often they're simply a waste of time and energy for everyone
        involved."
  * Adding more contributors doesn't obviously help the situation of high-demand, because 1) extractive
    contributions are negative ROI and shouldn't be reviewed by anyone, and 2) demand tends to expand to
    consume all resources.
  * Non-extractive contributions: net positive for the producers. Either contributions that are easy to
    assimilate, or genuinely high-value work.
  * E.g. a contribution which translates docs seems additive, but now it's permanent overhead as the primary
    docs evolve. Will the original translator commit to maintaining them?
  * "This fear of invoking public wrath leads maintainers to feel pressured to review contributions, even when
    they are extractive."
    * It's socially difficult to discard the needs, input, and contributions from users.
  * "The programming language Clojure is an example of an open source project that explicitly draws boundaries
    around participation. Rich Hickey, its author, is known for his top-down approach to governance."
    * "Authority comes along with authorship... I don't know why that is no longer obvious. Thinking otherwise
      yields a broken economic model, where people are not entitled to control over the products of their own
      labor, and thus are without control over their livelihood." - Rich Hickey
  * Maintainer attention on a project will decline over time, because the reputational benefits come early and
    thus motivation declines afterward.
  * "Filtering out" contributors who aren't motivated enough by adding friction:
    * Some "seem to deliberately enjoy not being on GitHub, because it makes their projects harder to get to."
  * Some maintainers desire "n=1" -- only one contributor -- and won't accept PRs, although they make take
    inspiration from them. N=1 lets them keep the whole project in their heads and avoid any overhead
    resulting from collaboration.
    * "I won't use your code. I love that people send me ideas, but I actually enjoy coding... so I will
      gladly take your suggestions, though I will write it myself." (Author of Lua, about PRs for Lua)
    * Sole maintainer makes it possible to achieve aesthetic goals like minimalism.
  * "User-to-user systems are a way of distributing costs without appropriating attention from producers."
    * John Resign: "The very first person I brought on to the jQuery project wasn't another developer to help
      contribute... it was someone to help manage our community."
  * Maintainers could consider charging for "write access" (the ability to appropriate their attention) rather
    than charging for read access, or soliciting donations. Charging makes their attention "excludable."
    * "One popular project hosts regular 'office hours' with its highest-paying supporters as a perk of
      sponsorship."
  * Argues that social status is the typical reward currency for creators, but open source developers aren't
    good at accumulating that reward, because their platform of choice (GitHub) doesn't help them amass
    popularity, in the same way that Twitter or YouTube does.
  * Example from Django: using donations to fund a "fellowship program" for someone to do the admin work of
    triaging PRs and issues in the Django issue tracker. "In this case paying for the work that Django
    contributors weren't otherwise incentivized to do was hugely helpful to the project."
* Conclusion
  * Some large platforms are becoming more like one-way mirrors -- content is broadcasted, but there's little
    room for or expectations of a dialog. Instagram stories, newsletters, podcasts.
  * "Group chats are the embodiment of Ostrom's thesis: a way of drawing boundaries around one's community,
    excluding extractive contributors, in order to allow for higher-context interactions. They, too, are an
    adaptive measure to the problem of over-participation."
  * Something Awful forums put a paywall in place before activating your account if you wanted to post.
    Apparently, this was very effective at keeping idiots out of the community.
  * "We're moving toward a future where rewards are heavily influenced by the quality of one's audience more
    than its size."
