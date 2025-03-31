import {Label} from "@radix-ui/react-label";
import {RadioGroup, RadioGroupItem} from "./ui/radio-group";

const fillterList = [
  {
    fillterType: "Role Wise",
    fillterData: [
      "web developer",
      "Software Developer",
      " Front-End Developer",
      "Back-End Developer",
      "Full-Stack Developer",
      "Data Scientist",
    ],
  },
  {
    fillterType: "Location Wise",
    fillterData: ["Delhi", "Noida", "Banglore", "Hadrabad"],
  },

  {
    fillterType: "Salary Wise",
    fillterData: ["2.5LPA", "3LPA", "5LPA", "7LPA"],
  },
];

const JobFillter = () => {
  return (
    <div className="flex h-[full] p-5">
      <div className="w-[15vw]  ">
        <h1 className="text-2xl ">
          <span className="text-red-700 font-bold">#Fillter</span> Jobs
        </h1>
        <hr className="mt-2" />
        <RadioGroup>
          {fillterList.map((data, index) => (
            <div>
              <h1 className="font-semibold" key={index}>
                <hr className="mb-3" />
                {data.fillterType}
                {data.fillterData.map((data, index) => (
                  <div key={index} className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={data} />
                    <Label>{data}</Label>
                  </div>
                ))}
              </h1>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default JobFillter;
