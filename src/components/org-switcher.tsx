'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Icons } from '@/components/icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';


type Organization = {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
};


const organizations: Organization[] = [
  {
    id: '1',
    name: 'ACME Company',
    role: 'Admin',
    imageUrl: ''
  },
  {
    id: '2',
    name: 'My Workspace',
    role: 'Member',
    imageUrl: ''
  }
];


export function OrgSwitcher() {
  const { isMobile, state } = useSidebar();
  const router = useRouter();

  const [activeOrg, setActiveOrg] = useState<Organization>(
    organizations[0]
  );


  function handleOrganizationSwitch(org: Organization) {
    setActiveOrg(org);
  }


  if (!activeOrg) {
    return null;
  }


  return (
    <SidebarMenu>
      <SidebarMenuItem>

        <DropdownMenu>

          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-popup-open:bg-sidebar-accent data-popup-open:text-sidebar-accent-foreground"
              />
            }
          >

            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">

              {activeOrg.imageUrl ? (
                <Image
                  src={activeOrg.imageUrl}
                  alt={activeOrg.name}
                  width={32}
                  height={32}
                  className="size-full object-cover"
                />
              ) : (
                <Icons.galleryVerticalEnd className="size-4" />
              )}

            </div>


            <div
              className={`grid flex-1 text-left text-sm leading-tight transition-all duration-200 ${state === 'collapsed' ? 'invisible max-w-0 overflow-hidden opacity-0' : 'visible max-w-full opacity-100'}`}
            >

              <span className="truncate font-medium">
                {activeOrg.name}
              </span>

              <span className="text-muted-foreground truncate text-xs">
                {activeOrg.role}
              </span>

            </div>


            <Icons.chevronsUpDown
              className={`ml-auto transition-all duration-200 ${state === 'collapsed' ? 'invisible max-w-0 opacity-0' : 'visible max-w-full opacity-100'}`}
            />


          </DropdownMenuTrigger>



          <DropdownMenuContent
            className="w-(--anchor-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >


            <DropdownMenuGroup>

              <DropdownMenuLabel className="text-muted-foreground text-xs">
                Organizations
              </DropdownMenuLabel>

            </DropdownMenuGroup>



            {organizations.map((org,index)=>{

              const isActive =
                org.id === activeOrg.id;


              return (

                <DropdownMenuItem
                  key={org.id}
                  onClick={() =>
                    handleOrganizationSwitch(org)
                  }
                  className="gap-2 p-2"
                >


                  <div
                    className="
                    flex size-6 
                    items-center 
                    justify-center 
                    overflow-hidden 
                    rounded-md 
                    border
                    "
                  >

                    {org.imageUrl ? (

                      <Image
                        src={org.imageUrl}
                        alt={org.name}
                        width={24}
                        height={24}
                        className="size-full object-cover"
                      />

                    ) : (

                      <Icons.galleryVerticalEnd 
                        className="size-3.5"
                      />

                    )}

                  </div>



                  {org.name}


                  {isActive && (
                    <Icons.check 
                      className="ml-auto size-4"
                    />
                  )}



                  {!isActive && (
                    <DropdownMenuShortcut>
                      ⌘{index + 1}
                    </DropdownMenuShortcut>
                  )}


                </DropdownMenuItem>

              );

            })}



            <DropdownMenuSeparator />



            <DropdownMenuItem
              className="gap-2 p-2"
              onClick={() =>
                router.push('/dashboard/workspaces')
              }
            >

              <div
                className="
                flex size-6 
                items-center 
                justify-center 
                rounded-md 
                border 
                bg-transparent
                "
              >
                <Icons.add className="size-4"/>
              </div>


              <div className="text-muted-foreground font-medium">
                Add organization
              </div>


            </DropdownMenuItem>



          </DropdownMenuContent>


        </DropdownMenu>


      </SidebarMenuItem>
    </SidebarMenu>
  );
}