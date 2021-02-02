# Eric Suh Assessment

## How to run the application

- Run `npm i` to install all the dependencies
- Build the production build using `npm run build`
- Install "serve" package `npm install -g serve`
- Serve the build files `serve -s build`

_`npm run start` will work as well, but since that runs the development version of the app, performance will be worse. To test performance on a production build, please run the commands above._

## Architecture decisions

- Used create-react-app because I wanted to save time on having to manually setup webpack.
- I am using React with the assumption that this is not a one-off page. Created re-usable components for other pages that may exist.
- Used Formik as it handles most of the use case for form handling.
- Used css-modules for styling so that there is no need for name spacing and no worry about overriding the styles.
- Using axios mainly for the mocking functionality. Would be fine using `fetch` otherwise.

## Assessment notes

- Texture image has a big file size. Would have been nice to get a small jpeg that can be repeatable. For this purpose, I cropped the image, but visually it can use some work.
- I did not fully customize the dropdown because of time. It would require a good amount of effort to make it ADA compliant.
- The fieldName data is comma seprated instead of having it multiple times as a param.
