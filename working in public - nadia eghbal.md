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
