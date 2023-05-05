export const Footer = ({ companyDescription, footerLinks }: any) => {
  return (
    <footer className="flex justify-center w-[100%] bg-on-background text-background bg-blue-600 text-white-50">
      <div className="max-w-[1440px] w-[100%] px-8 py-12 lg:p-20">
        <div className="flex flex-col lg:flex-row text-surface--variant space-y-10 lg:space-x-20 lg:space-y-0">
          <div>
            <h4 className="text-body-lg">Delano Bat Company, LLC</h4>
            <p className="text-surface--variant max-w-[360px] text-body-sm pt-6">
              {companyDescription}
            </p>
          </div>
          <div className="flex justify-between flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20">
            {footerLinks.map((link: any, i: number) => {
              return (
                <div className="lg:pl-4 w-[140px]" key={i}>
                  <h6 className="mb-4 text-body-lg">{link.label}</h6>
                  <ul className="text-body-sm space-y-4">
                    {link.children.map((child: any, j: number) => {
                      return (
                        <li key={j}>
                          <a href={child.url}>{child.label}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div className="lg:pl-4">
              <h6 className="mb-4 text-body-lg">Contact</h6>
              <p className="text-body-sm">
                Delano Bat Company, LLC <br /> 4435 Farmington Ave SE <br /> Delano, MN 55328
              </p>
              <p className="pt-8 text-body-sm">Email: sales@delanobats.com</p>
              <p className="pt-4 text-body-sm">Phone: (763)331-5757</p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <p className="text-body-sm">&copy; 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
