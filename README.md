# Sebastiaan Fehr - Resume

A concise resume tailored to the Gameloft Brisbane Studio Director outreach. The website preserves the committed design from `8499573`: portrait, black sidebar, skills and education on the left, with experience on the right. The revised resume content is fitted into that design. A separate two-page A4 PDF is available from the contact details. No build or external assets are required.

## Preview and export

Open `index.html` directly, or serve this folder with a static file server. The left-hand contact column links directly to the separate PDF file. The original responsive layout stacks the columns below 800px. Use the PDF for the formatted, two-page document; its source and styling are separate from the website.

- `index.html`: website content and original committed design.
- `headshot.png` and `icon-popout.svg`: the original portrait and external-link icon.
- `resume-print.html`: independent source for the two-page PDF, initially preserved from `1a846ae` and kept in step with the website wording.
- `output/pdf/Sebastiaan-Fehr-Studio-Director.pdf`: attachment-ready PDF.
- `scripts/export-pdf.mjs`: exports the open local resume through an existing Chromium debugging endpoint, respecting the A4 CSS. Requires Node 22+; no npm dependencies.
- `tmp/`: ignored local verification files.
- `CNAME`: existing GitHub Pages domain configuration.

To reproduce the PDF with agent-browser:

```powershell
agent-browser --session seb-resume --allow-file-access open file:///C:/Work/Seb.Resume/resume-print.html
agent-browser --session seb-resume get cdp-url
# Use the localhost port from the returned browser URL:
node scripts/export-pdf.mjs http://127.0.0.1:<port>
```

The agent-browser default PDF export uses Letter paper; the helper uses `preferCSSPageSize` to preserve A4. Keep resume wording in `index.html` and `resume-print.html` in sync. Re-export the PDF after editing its source and visually inspect both pages. Do not replace the website layout with the print source.

## Editorial decisions

- Lead with studio operations, people leadership, production and named delivery examples; compress the technical inventory and early career history.
- Editorial pass on 9 October: put the 12-person peak and regular 3+ project workload in the opening, remove duplicate leadership/AI claims and shorten early roles. Use the saved space for 11pt PDF body text.
- Restore the actual committed website design from `8499573`, including the portrait, original CSS, 35/65 column proportions, skills/education/languages sidebar and external-link icons. Transfer the revised wording into its existing sections. Repeated claims and the referee contact block, including its placeholder phone number, remain removed from the updated content.
- Correction on 10 October 2026: Seb wants a website and a separate PDF file. Do not present the screen layout as two paper pages or substitute a PDF preview for the website.
- Further correction on 10 October: restoring a similar layout is insufficient. Use Git history to recover the actual baseline, then integrate current content into it. The later custom sidebar redesign was rejected.
- Leadership and collaboration pass on 10 October: restore PC/console/VR/mobile breadth in the opening, foreground executive communication and recruitment/mentoring, and replace the redundant tools/testing bullet. Add concise, linked meetup, AWE and streamer-summit evidence while retaining the Griffith keynote, QUT teaching and open-source work. The website CSS remains unchanged.
- Describe Actuator's creator outreach and streaming production at the summit without implying it organised the entire festival. Screen Queensland presented the summit in association with Twitch and delivered it with BRIGDA. No audience, commercial or growth metrics are claimed.
- Distinguish Seb's studio leadership from Actuator's team contributions. The Cat Burglar narrative award belongs to the game; Actuator's documented work was technical performance support, not narrative authorship.
- Include the latest 2026 AGDA results, not just the September finalist announcement.
- Present Based Code as practical AI-assisted development, tooling and education. Not Monsters remains in development. Do not imply AI was used in On Point: Seb's published account explicitly says it was made without AI.
- Keep Based Code to three concise bullets: practical AI coding/3D asset workflows, production tools and quality standards, and Steam release preparation. These replace the generic AI and streaming detail; omit additional project names and narrow technical metrics to preserve focus.
- Link the Based Code entry to `https://basedcode.dev/`, as requested by Seb, rather than directly to Twitch. The domain is confirmed by the Based.Socials website configuration.
- List Unity, Unreal Engine and Godot as engine experience, as confirmed by Seb on 9 October 2026. Do not imply a specific Unreal proficiency level or shipped Unreal title.
- Do not claim AAA-scale studio leadership, revenue growth, profitability, budget sizes, quantified productivity gains or formal KPI ownership without supporting evidence.
- Keep compensation, availability and travel preferences for the recruiter conversation; none were supplied.
- No publishing, application submission or recruiter contact was requested or performed.

## Evidence and provenance

Research checked 9-10 October 2026. Existing career dates, responsibilities, education and the Cree8ware 200+ employee figure come from the prior user-supplied resume unless noted below.

| Resume material | Source | Scope and caution |
| --- | --- | --- |
| Peak Actuator team of 12 full-time staff | Seb's confirmation in this chat, 9 October 2026 | Historical peak, not current headcount. |
| Often 3+ concurrent projects | Seb's confirmation in this chat, 9 October 2026 | Opening says "regularly managing"; does not imply a fixed current project count. |
| Phone 0410 810 858; Melbourne, Australia | Seb's confirmation in this chat, 9 October 2026 | Corrects the earlier contact-number conflict and confirms current city. Phone link uses +61410810858. |
| On Point: Extended Reality finalist; Cat Burglar: Gameplay, Narrative and Accessibility finalist | [Official 2026 AGDA finalists](https://agdas.com.au/2026-finalists/) | On Point listed as Actuator Games; Cat Burglar credits Abandoned Sheep with SuperTonic, Actuator Digital and Translationz. |
| Cat Burglar: Excellence in Narrative winner | [Official 2026 AGDA winners, 7 October](https://agdas.com.au/2026-winner/) | Game-level award. On Point remained a finalist. |
| On Point full release in December 2025 | [Seb's finalist announcement](https://actuator.blog/posts/on-point-agdas-finalist/) | Supports completion, strategic choices and community feedback; does not support claims of commercial profitability. |
| On Point: 115 minigames, Meta Quest and PC VR | [Official press kit](https://actuator.blog/posts/on-point-press-kit/) | Product scope, not a sales metric. |
| Cat Burglar: rendering bottlenecks and optimisation recommendations prioritised by impact and effort; programming/Steam integration and platform testing | [Steve Halliwell's performance-analysis article, 20 December 2024](https://actuator.blog/posts/case-study-cat-burglar/) and [current Actuator portfolio](https://actuator.digital/projects/) | Article identifies rendering as the primary performance pressure and describes recommendations with value/effort estimates. Portfolio supports the wider delivery scope. No measured frame-rate gain, implemented optimisation result or personal authorship by Seb is claimed. |
| Into Black multiplayer integration | [Actuator case study](https://actuator.blog/posts/case-study-into-black/) | Documents netcode, synchronisation and session management; no independently established sales claim included. |
| HITMAN 3 VR shader/VFX, profiling and technical QA | [Actuator case study](https://actuator.blog/posts/case-study-hitman3-vr-reloaded/) | Work in Glacier 2 / Vulkan; does not establish Unreal proficiency. |
| Studio portfolio and current leadership | [Actuator projects](https://actuator.digital/projects/) and [team](https://actuator.digital/team/) | Public studio work, not proof Seb personally implemented every item. |
| Griffith 2024 keynote | [Official event listing](https://events.humanitix.com/experimental-game-design-conference) and [Seb's keynote recap](https://actuator.blog/posts/keynote-griffith-game-conference/) | Event listing names Seb as the 5 December 2024 keynote speaker. Recap supports studio-building lessons. |
| Brisbane Unity Developers meetup organiser | [Meetup group](https://www.meetup.com/Brisbane-Unity-Developers/) and Seb's confirmation, 10 October 2026 | Public organiser list names Sebastiaan Fehr. Recent listings use Game Development Brisbane; the resume retains the familiar Brisbane Unity Developers name. No start date or membership metric claimed. |
| AWE Nite Queensland panel moderator | Seb's confirmation, 10 October 2026; [official AWE Nite chapter listing](https://www.awexr.com/awenite) | AWE independently lists Seb with the Queensland chapter. The specific moderator role is user-confirmed; the chapter page does not state that title. |
| Queensland Games Festival / Let's Play Streamer Summit, 26-27 June 2026 | [Screen Queensland event announcement](https://screenqueensland.com.au/sq-news/lets-play-streamer-summit-2/), [Actuator's public event account](https://www.linkedin.com/company/actuator-digital/) and Seb's confirmation | Screen Queensland confirms Twitch involvement, BRIGDA delivery and streaming stations. Actuator publicly describes supporting the event. Local QGF records below support Seb's introduction, outreach and production role. |
| Current Not Monsters and AI workflows | Based Basic Memory: Hunyuan retopology recovery; Steam review and alpha demo development context; local Not Monsters README | Godot/C#, AI asset workflows, automated and multiplayer validation; do not imply full commercial release. |
| Production standards and Steam release preparation | Not Monsters Client Docs/Standards/QA.md and Testing.md; Based Steam review/development memory; Actuator October 2026 Steam Next Fest preparation memory | Supports review standards, automated/multiplayer checks, separate build targets, deployment tooling and Steamworks submissions. Preparation is not a claim of full release, Valve approval or a currently passing release gate. |
| Navoke and Based tools | Local Based.WorkflowAutomation README and existing resume | Practical production tooling; no adoption or revenue numbers claimed. |
| Role tailoring | User-provided recruiter exchange and [Gameloft Brisbane studio page](https://www.gameloft.com/gameloft-studios/brisbane) | Public page supports PC/console direction, culture and mentorship. Recruiter claims about the role and AI investment are supplied context, not independently verified. |

Local QGF evidence: `C:/Work/Actuator.QGF-Stream-Setup/transcripts/mlp-lance-meeting.md` records Seb explaining that he connected Screen Queensland with Twitch, conducted creator outreach and was organising a streaming station. `transcription_work/meeting_action_items.md` in the same repository records June 2026 AV/venue, streaming and creator coordination. These are planning records, not proof that every proposed feature shipped. `C:/Work/Based.QgfInvite/README.md` corroborates the creator invitation/signup website. The resume uses only the broad contribution supported by those records, the public account and Seb's confirmation; it omits proposed formats and unverified results.

## Items to confirm if refining further

- Revenue/budget responsibility, reporting/KPI practice and measurable improvements would strengthen executive benchmarking if Seb can provide defensible figures.
- Earlier overlapping dates and QUT guest lecturing remain based on the supplied resume. Seb reconfirmed the meetup and AWE roles on 10 October; their start dates are not supplied.

## Verification

Design restoration, 10 October: `index.html` was first restored byte-for-byte from `8499573` before applying the revised content. The website's CSS remains identical to that commit. The separate PDF source was initially copied byte-for-byte from `1a846ae`; subsequent content edits are applied to both sources and the PDF regenerated independently.

Checked all 24 current resume paragraphs and bullets were retained, plus the corrected phone, Based Code link and separate PDF download. Compared the restored and updated desktop renders, inspected the full page and mobile layout, and confirmed no horizontal overflow at 1365px, 390px and 320px. The PDF link returned HTTP 200 and `application/pdf`. The export script syntax and `git diff --check` passed.

The final export was checked as two A4 pages with selectable text, working PDF link annotations and correct page numbering. Both rendered pages were visually inspected. Browser checks at 390px and 1280px found no horizontal overflow. `git diff --check` passed. The editorial revision reduced visible main content from approximately 696 to 559 words, excluding footers; retained all confirmed scale/contact details; and verified the Cat Burglar article link in the PDF.

Leadership/collaboration revision, 10 October: regenerated and visually inspected both A4 pages, retaining 11pt body text. Tightened page-two section spacing to retain clear footer margins. Checked matching resume wording and the new source links in both HTML files and the PDF, original website CSS, the PDF download, and desktop/mobile widths (1365px, 390px and 320px).

## Hosting

The existing site is hosted on GitHub Pages at [seb.fehr.work](https://seb.fehr.work). Local edits do not update the live site until published through the repository's normal process.
