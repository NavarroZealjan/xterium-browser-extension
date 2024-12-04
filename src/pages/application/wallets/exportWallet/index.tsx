import React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";

interface IndexExportWalletProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const IndexExportWallet: React.FC<IndexExportWalletProps> = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer open={isDrawerOpen} onOpenChange={toggleDrawer}>
      <DrawerContent>
        <DrawerHeader className="border-b border[#2B3856]">
          <DrawerTitle className="font-inter font-extrabold text-[12px] leading-[15px] tracking-[0.15em] text-[#9AB3EB]">
            EXPORT WALLET DATA
          </DrawerTitle>
        </DrawerHeader>
        <DrawerDescription>
          <div className="p-6">
            <Form>
              <div className="mb-8">
                <Label className="font-bold pb-2">
                  Enter your password:
                </Label>
                <Input
                  type="password"
                  placeholder="********"
                />
              </div>
              <Button type="button" variant="violet">
                  CONFIRM
              </Button>
            </Form>
          </div>
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
};

export default IndexExportWallet;
