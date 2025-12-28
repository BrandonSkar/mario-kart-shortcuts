export const YV_shortcuts = {
	na: [
		{
			id: "3lap-fence-jump",
			title: "3lap Fence Jump",
			description: "Jump over the fence and hit the wall to trigger the lap",
			steps: [
				{
					title: "Do a boost start with AB and hold left just enough to get the right angle, shroom soon after starting"
				},
				{
					title: "When you reach the down hill press R and tap Left\n" +
					"You're aiming for the black area on the wall in the image\n" +
					"Your kart should shoot left after you hit the wall if you hit the right area",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/3lap-fence-jump.png`,
					],
				},
				{
					title: "After Lakitu puts you down AB spin and shroom holding left, get the right angle and tap left and R again" +
					"NOTE: If it seems like you hit the wall in the right place but the lap didn't trigger\n" +
					"It's because you jumped too far away from the finish line, you should be left of this post when you cross the fence",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/fence-post.png`,
					]
				}
			]
		},
		{
			id: "flap-fence-jump",
			title: "flap Fence Jump",
			description: "Jump over the fence at the end of the lap and hit the wall to trigger the lap",
			steps: [
				{
					title: "Go around the track but don't cross the finish line"
				},
				{
					title: "Follow the video to find the area you need to be",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/YV/flap-position.mp4`,
					],
				},
				{
					title: "Align yourself with the image, it doesn't have to be perfect for it to work",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/flap-alignment.png`,
					],
				},
				{
					title: "Drive with triple tap A and jump right when you hit the fence"
				}
			]
		},
		{
			id: "yv-01",
			title: "YV .01 flap",
			description: "One of the hardest shortcuts in the game.\n" +
			".02 isn't bad but .01 is so hard for some reason\n" +
			"You have to be pixel perfect with EVERY setup, if you land it without being pixel perfect you will be the first",
			steps: [
				{
					title: "Pick Luigi"
				},
				{
					title: "Drive down the road and take the far right path to the first left turn and turn around",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/YV/turn-around-spot.mp4`,
					],
				},
				{
					title: "Drive back towards the finish line but follow close to the fence (watch some other .01 videos for reference)",
				},
				{
					title: "Drive up the hill and past the finish line again, take the far right path again but you can go until you reach the spot in the video\n" +
					"Stop at the \"First corner\" in the image",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/YV/fence-setup-spot.mp4`
					],
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/first-corner.png`,
					],
				},
				{
					title: "Zoom in with the camera (C-up)"
				},
				{
					title: "Fence bounce is the start of the setup and one of the most important parts of the entire shortcut\n" +
					"A single pixel off from doing the fence bounce will cause you to be multiple pixels off by the end of the setup\n" +
					"Here are many references to the importance of it",
					links: [
						{
                            label: "Match MANY visual cues",
                            link: "https://discord.com/channels/692171166034427916/1117106342784671784/1326452707795664967",
                        },
						{
                            label: "You can get bad bounces even with a single frame A press",
                            link: "https://discord.com/channels/692171166034427916/1117106342784671784/1275234597160091709",
                        },
						{
							label: "Take it slow, very many single frame A taps",
							link: "https://discord.com/channels/692171166034427916/1117106342784671784/1258840506683625562"
						},

					]
				},
				{
					title: "Drive into the corner of the fence slowly, doing single frame A taps\n" +
					"Watch the top left part of your item box\n" +
					"It should be on the fence post where the finish line is, about half way into the post",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/corner-placement.png`,
					],
				},
				{
					title: "Switch to the Speedometer (C-right)\n" +
					"This will allow you to see certain pixels on the post behind the map/speedometer that the map doesn't let you see\n" +
					"The part of the post we are going to be paying attention to is in the image",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/pixels-on-post.png`,
					]
				},
				{
					title: "Still slowly doing single frame A taps watch the pixels on the post\n" +
					"The left side pixels will begin disappearing until you get the fence bounce and then they will all return and you will see your cart bounce back slightly",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/YV/full-screen-fence-bounce.mp4`,
						`${process.env.PUBLIC_URL}/assets/videos/YV/zoomed-in-fence-bounce.mp4`,
					],
				},
				{
					title: "Zoom out with the camera (C-up)"
				},
				{
					title: "Jump right and line yourself up with the image, you may need to do very tiny adjustments to get the poles exactly how they are in the image",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/before-backup-setup.png`,
					]
				},
				{
					title: "For the first backup you want 180 BPM, start on 1 and let go of B just before you reach 9",
					links: [
						{
							label: "180 BPM",
							link: "https://metronome-online.com/180-bpm"
						},
						{
							label: "Acid with metronome timings",
							link: "https://discord.com/channels/692171166034427916/1117106342784671784/1156995404097933342"
						},
						{
							label: "Slim confirming the timings",
							link: "https://discord.com/channels/692171166034427916/1117106342784671784/1156997627536220160"
						},
					]
				},
				{
					title: "After the backup your kart should be exactly half way between the 2 highlighted patches on the ground\n" +
					"It's very easy to tell if you're right on the spot or not",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/first-backup-1.png`,
						`${process.env.PUBLIC_URL}/assets/images/YV/first-backup-2.png`,
					]
				},
				{
					title: "Jump right and align yourself with the image",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/canyon-alignment-no-markings.png`,
					]
				},
				{
					title: "Make sure Luigi's hat is aligned just right with the canyon\n" +
					"Look at the top right of his hat and align it close with the polygon line in the square\n" +
					"Make sure you see the Dot, Line, Dot, Triangle pattern on the fence as well",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/canyon-alignment-markings.png`,
					]
				},
				{
					title: "Do 2 single frame backups"
				},
				{
					title: "jump right and align yourself with the image\n" +
					"NOTE: Sometimes jumping with very small adjustments wont get you the perfect position\n" +
					"Sometimes you have to jump very far left/right then do slight adjustments again to get new coordinates to find the perfect position",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/final-setup.png`,
						`${process.env.PUBLIC_URL}/assets/images/YV/final-setup-markings.png`,
					]
				},
				{
					title: "There are a few ways people do this last set up, so the next 3 setups will be 3 different ways of performing the final inputs for the shortcut\n" +
					"Do what works best for you"
				},
				{
					title: "METRONOME\n" +
					"188 BPM. Start at 1 and hold B until 8.5 beats, release B and then press B again on the 9th beat\n",
					links: [
						{
							label: "188 BPM",
							link: "https://metronome-online.com/188-bpm"
						},
						{
							label: "Slim explaining the B presses/release",
							link: "https://discord.com/channels/692171166034427916/1117106342784671784/1325895351185702975"
						},
						{
							label: "Acid with metronome timings",
							link: "https://discord.com/channels/692171166034427916/1117106342784671784/1156995404097933342"
						},
					]
				},
				{
					title: "VISUAL CUES\n" +
					"Just watch where Luigi is when he's falling down the canyon and release and press B at the exact frames",
					links: [
						{
							label: "MartinK with the visual cue idea",
							link: "https://discord.com/channels/692171166034427916/1117106342784671784/1117552265050464278"
						},
					]
				},
				{
					title: "MY TOOL\n" +
					"A tool I made for getting comfortable with the B release and press timings (only works on keyboard) Click \"RUN\" at the top right\n" +
					"The table has the correct shroom windows and a time for when to click the start button\n" +
					"Click start when the in game time matches the \"Start Timer\" column\n" +
					"Do the B + Z inputs on the first red line, release B on the 2nd red line and press B again on the 3rd red line",
					links: [
						{
							label: "YV 01 Practice Tool",
							link: "https://onecompiler.com/html/43q3wzg9s"
						},
					]
				},
			]
		},
	],
};