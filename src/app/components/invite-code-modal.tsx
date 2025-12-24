import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InviteCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function InviteCodeModal({ isOpen, onClose, onSuccess }: InviteCodeModalProps) {
  const { t, i18n } = useTranslation();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const isEn = i18n.language === 'en';

  const VALID_CODES = ['BEEVIP', 'BEE2A3W'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (VALID_CODES.includes(code.trim())) {
      // 保存验证状态到 localStorage
      localStorage.setItem('mentorAccessVerified', 'true');
      onSuccess();
      setCode("");
      setError("");
    } else {
      setError(isEn ? "Invalid invitation code." : "无效的邀请码，请重试。");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isEn ? "Enter Invite Code" : "请输入邀请码"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isEn 
              ? "This content is exclusive to our community. Please enter your invite code to continue." 
              : "此内容仅限内部访问，请输入邀请码继续。"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="invite-code">
              {isEn ? "Invite Code" : "邀请码"}
            </Label>
            <Input
              id="invite-code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              placeholder={isEn ? "Enter code here" : "在此输入邀请码"}
              className={error ? "border-red-500" : ""}
            />
            {error && (
              <p className="text-xs text-red-500">{error}</p>
            )}
          </div>

          <DialogFooter>
             <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              {isEn ? "Cancel" : "取消"}
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#f7931e] hover:bg-[#d87c0e] text-white"
            >
              {isEn ? "Verify" : "验证"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}