
type branchContactInformation = {
    location: string;
    phone: string;
    mobile: string;
    email: string;
    address: string;
  }
  
  const branchContactInformation: Record<string, branchContactInformation> = {
    northampton: {
      location: "Northampton",
      phone: "0330 165 89 04",
      mobile: "07864 329 740",
      email: "sales@bnfcarsnorthampton.co.uk",
      address: "Knightley Road, Northampton, NN2 6HQ",
    },
    syston: {
      location: "Syston",
      phone: "03301 130 458",
      mobile: "07498 033 553",
      email: "sales@systonautosltd.co.uk",
      address: "Unit 10 Mill Lane Syston, Leicester, LE7 1NS",
    },
  };
  
  export default branchContactInformation;
  