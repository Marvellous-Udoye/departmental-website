import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col lg:flex-1 max-w-[300px]">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
                width={100}
                height={100}
              />
            </Link>
            <p className="text-muted-foreground mt-6">Making the world a better place through constructing elegant hierarchies.</p>
          </div>

          <div className="flex flex-wrap justify-between lg:w-2/3">
            <div className="w-1/2 md:w-1/4 mb-6">
              <h5 className="font-bold mb-3">Solutions</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-6">
              <h5 className="font-bold mb-3">Support</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Submit ticket
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-6">
              <h5 className="font-bold mb-3">Company</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-6">
              <h5 className="font-bold mb-3">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <div className="flex space-x-6 mb-4 lg:mb-0">
            {/* ---Social Media Icons--- */}
          </div>
          <div className="text-muted-foreground">© 2024 Your Company, Inc. All rights reserved.</div>
        </div>
      </div>
    </footer >
  )
}