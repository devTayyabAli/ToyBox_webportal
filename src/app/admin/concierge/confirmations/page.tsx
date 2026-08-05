import { redirect } from "next/navigation";

export default function ConciergeConfirmationsRedirect() {
  redirect("/admin/bookings");
}
