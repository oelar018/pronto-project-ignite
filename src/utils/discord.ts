interface DiscordData {
  name?: string;
  email: string;
  use_case?: string;
  role?: string;
}

export async function sendToDiscord(data: DiscordData): Promise<void> {
  // Discord webhook URL - in a real app this should be an environment variable
  const webhookUrl = "https://discord.com/api/webhooks/1418048569025232942/n_vrx9_32mwLw1CgllNvSkMW4Hhl5zqberPY_5CG2mN8w6wOJnX5FsQ4-7vOebKiPf3-";
  
  if (!webhookUrl) {
    console.warn('Discord webhook URL not configured');
    return;
  }

  const payload = {
    embeds: [{
      title: "🚀 New Neura AI Waitlist Signup",
      color: 0x00d4ff, // Cyan color
      fields: [
        {
          name: "Name",
          value: data.name || "Not provided",
          inline: true
        },
        {
          name: "Email",
          value: data.email,
          inline: true
        },
        {
          name: "Use Case / Role",
          value: data.use_case || data.role || "Not provided",
          inline: false
        }
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Neura AI Waitlist"
      }
    }]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.status}`);
    }
  } catch (error) {
    console.error('Failed to send to Discord:', error);
    throw error;
  }
}