import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  projectType: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Send email to business
    const businessEmailResponse = await resend.emails.send({
      from: "Baja Glass <noreply@bajaglass.com>",
      to: ["info@bajaglass.com"],
      reply_to: formData.email ? [formData.email] : undefined,
      subject: `New Quote Request from ${formData.name} - ${formData.projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a1a1a, #4a5568); color: white; padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">New Quote Request</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Baja Glass - Las Vegas Shower Doors</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <h2 style="color: #1a1a1a; margin-top: 0; font-size: 20px;">Customer Information</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4a5568;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${formData.name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: #4a5568; text-decoration: none;">${formData.phone}</a></p>
              ${formData.email ? `<p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #4a5568; text-decoration: none;">${formData.email}</a></p>` : ''}
              <p style="margin: 0 0 10px 0;"><strong>City:</strong> ${formData.city}</p>
              <p style="margin: 0;"><strong>Project Type:</strong> ${formData.projectType}</p>
            </div>
            
            ${formData.message ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4a5568;">
              <h3 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 16px;">Project Details:</h3>
              <p style="margin: 0; line-height: 1.6; color: #4a5568;">${formData.message}</p>
            </div>
            ` : ''}
            
            <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #bee5eb;">
              <p style="margin: 0; font-size: 14px; color: #0c5460;">
                <strong>Next Steps:</strong> Follow up within 24-48 hours with quote details and consultation scheduling.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6c757d; font-size: 12px;">
            <p style="margin: 0;">Baja Glass | 4280 Reno Ave, Ste A, Las Vegas, NV 89118 | (702) 383-0779</p>
          </div>
        </div>
      `,
    });

    console.log("Business email sent:", businessEmailResponse);

    // Send confirmation email to customer (if email provided)
    if (formData.email) {
      const customerEmailResponse = await resend.emails.send({
        from: "Baja Glass <noreply@bajaglass.com>",
        to: [formData.email],
        subject: "Quote Request Received - Baja Glass Las Vegas",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1a1a1a, #4a5568); color: white; padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Thank You, ${formData.name}!</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your quote request has been received</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
              <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; color: #4a5568;">
                We've received your request for a <strong>${formData.projectType}</strong> project in ${formData.city}. 
                Our team will review your information and contact you within <strong>24-48 hours</strong> with:
              </p>
              
              <ul style="color: #4a5568; line-height: 1.8; margin: 0 0 25px 0; padding-left: 20px;">
                <li>Detailed quote options and pricing</li>
                <li>Available consultation times</li>
                <li>Timeline for your project</li>
                <li>Next steps in the process</li>
              </ul>
              
              <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #ffeaa7;">
                <p style="margin: 0; font-size: 14px; color: #856404;">
                  <strong>Need faster service?</strong> Call or text us at <a href="tel:+17023830779" style="color: #856404; text-decoration: none; font-weight: bold;">(702) 383-0779</a> for immediate assistance.
                </p>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4a5568;">
                <h3 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 18px;">Why Choose Baja Glass?</h3>
                <ul style="color: #4a5568; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li>Licensed, bonded, and insured</li>
                  <li>Precision laser measurements</li>
                  <li>Premium tempered safety glass</li>
                  <li>In-house professional installers</li>
                  <li>Strong warranty coverage</li>
                  <li>Trusted by Las Vegas homeowners</li>
                </ul>
              </div>
            </div>
            
            <div style="text-align: center; padding: 20px; color: #6c757d; font-size: 12px;">
              <p style="margin: 0 0 10px 0;">Baja Glass | 4280 Reno Ave, Ste A, Las Vegas, NV 89118</p>
              <p style="margin: 0;"><a href="tel:+17023830779" style="color: #4a5568; text-decoration: none;">(702) 383-0779</a> | Monday-Friday 8am-4pm</p>
            </div>
          </div>
        `,
      });

      console.log("Customer confirmation email sent:", customerEmailResponse);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Quote request submitted successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send email" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);