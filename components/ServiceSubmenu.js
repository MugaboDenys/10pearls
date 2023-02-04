import Link from "next/link";

const ServiceSubmenu = () => {
    const focus =[
        {title : "focus"},
        {desc : "innovation"},
        {desc : "modernization"},
        {desc : "digitalization"},
        {desc : "augmentation"}
    ]

    const solutions =[
        {title : "Solution"},
        {desc : "software development"},
        {desc : "User experience"},
        {desc : "digital marketing"},
        {desc : "quality assurance"},
        {desc : "security"},
        {desc : "data & analytics"},
        {desc : "devops & cloudops"},

    ]

    const platforms =[
        {title : "Platforms"},
        {desc : "salesforce"},
        {desc : "sitecore"},
        {desc : "sharepoint"},
        {desc : "servicenow"}
    ]

  return (
    <div className="grid grid-flow-col gap-x-10 absolute right-[25rem]">
      <div>
        {focus.map((item, index)=>(
            <ul key={index} className=" hover:text-blue-800 space-y-1">
                <h2 className="font-bold">{item.title}</h2>
                <li>
                    <Link href={'/'}>{item.desc}</Link>
                </li>
            </ul>
        ))}
      </div>

      <div>
        {solutions.map((item, index)=>(
            <ul key={index} className=" hover:text-blue-800 space-y-1">
                <h2 className="font-bold">{item.title}</h2>
                <li>
                    <Link href={'/'}>{item.desc}</Link>
                </li>
            </ul>
        ))}
      </div>

      <div>
        {platforms.map((item, index)=>(
            <ul key={index} className=" hover:text-blue-800 space-y-1">
                <h2 className="font-bold">{item.title}</h2>
                <li>
                    <Link href={'/'}>{item.desc}</Link>
                </li>
            </ul>
        ))}
      </div>
    </div>
  );
};

export default ServiceSubmenu;
