# KeepFit
A full-stack web application built for my clients at KeepFit LLC. Users can sign up, log in, log workouts, delete workouts, or view a custom exercise library with 52 images and videos.

**Link to project:** https://keepfit.onrender.com/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, Bootstrap, EJS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport, Multer, Cloudinary

My idea for this project came from wanting to leave something behind for my clients at KeepFit LLC once I close the business. Part of what I do for them in virtual personal training sessions is demonstrate exercises and log their workouts. I decided to record all of the exercises we use and include the ability to log workouts. I simplified the app to include the exercise library with videos and images stored on Cloudinary. I recorded all the videos of myself demonstrating. Then I added the ability to record workouts in the database, and last, I added the ability to delete.

## Optimizations

The only way I could figure out how to log workouts on individual lines with EJS was to create a separate object in the workout schema for every single exercise. This creates an unappealing look at the section where the workout log is. In the future, I'd look to optimize this, and potentially re-do the whole thing with React.

## Lessons Learned:

A timestamp in EDT on my local device might be at a different time zone when hosted. It's now in GMT.  I also learned a ton about how the code architecture works. 
