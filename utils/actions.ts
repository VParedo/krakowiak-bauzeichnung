"use server";

/** 
import Event from "@/models/event";
import { connectToDB } from "./database";
import { v4 as uuidv4 } from "uuid";
import { getServerSession } from "next-auth";

export async function sellingFormAction(formData: FormData, eventId: String) {
  const session = await getServerSession();
  // Make this as an API call (so the user doesnt have to wait)?
  const data = {
    _id: uuidv4(),
    sellerMail: session?.user?.email,
    quantity: formData.get("quantity"),
    section: formData.get("section"),
    row: formData.get("row"),
    seatFrom: formData.get("seatFrom"),
    seatTo: formData.get("seatTo"),
    ticketType: formData.get("ticketType"),
    ticketSplitting: formData.get("ticketSplitting"),
    pricePerTicket: formData.get("pricePerTicket"),
  };

  const query = { _id: eventId };
  const update = { $push: { ticketsForSale: data } };

  await connectToDB();

  await Event.updateOne(query, update);
}
*/

export async function formAction(formData: FormData) {
  // Make this as an API call (so the user doesnt have to wait)?
  /** 
  const data = {
    _id: uuidv4(),
    sellerMail: session?.user?.email,
    quantity: formData.get("quantity"),
    section: formData.get("section"),
    row: formData.get("row"),
    seatFrom: formData.get("seatFrom"),
    seatTo: formData.get("seatTo"),
    ticketType: formData.get("ticketType"),
    ticketSplitting: formData.get("ticketSplitting"),
    pricePerTicket: formData.get("pricePerTicket"),
  };

  const query = { _id: eventId };
  const update = { $push: { ticketsForSale: data } };

  await connectToDB();

  await Event.updateOne(query, update);
  */
  console.log(formData.get("email"));
}

export async function submitFeedback(formData: FormData) {
  const temp = await fetch(process.env.DISCORD_WEBHOOK_FEEDBACK!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: formData.get("message") }),
  });
}
