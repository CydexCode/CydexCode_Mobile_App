import { useUser } from '@clerk/clerk-expo';
import { gql, request } from 'graphql-request';


const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clz28jphe02ui07v0ly8c2ta9/master"

export const getCourseList = async (level) => {
  const query = gql`
    query CourseList {
        courses(where: {level: `+ level + `}) {
          id
          name
          price
          level
          tags
          time
          author
          description {
            markdown
          }
          banner {
            url
          }
          chapters {
            content {
              heading
              description {
                markdown
                html
              }
              output {
                markdown
                html
              }
            }
            title
            id
          }
        }
      }      
    `
  const result = await request(MASTER_URL, query);
  return result;
}

export const enrollCourse = async (courseId, userEmail) => {
  const mutationQuery = gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "`+ courseId + `", 
      userEmail: "`+ userEmail + `", course: {connect: {id: "` + courseId + `"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}



export const getUserEnrolledCourse = async (courseId, userEmail) => {
  const query = gql`
  query GetUserEnrolledCourse {
    userEnrolledCourses(
      where: {courseId: "`+ courseId + `", 
        userEmail: "`+ userEmail + `"}
    ) {
      id
      courseId
      completedChapter {
        chapterId
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export const MarkChapterCompleted = async (chapterId, recordId, userEmail, points) => {
  const mutationQuery = gql`
  mutation markChapterCompleted {
    updateUserEnrolledCourse(
      data: {completedChapter: {create: {data: {chapterId: "`+ chapterId + `"}}}}
      where: {id: "`+ recordId + `"}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
    
     
    
    
  }
  `

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}


export const createNewUser = async (userName, email, profileImageUrl) => {
  const mutationQuery = gql`
  mutation CreateNewUser {
    upsertUserDetail(
      upsert: {create: 
        {email: "`+ email + `",  
        profileImage: "`+ profileImageUrl + `", 
        userName: "`+ userName + `"}, 
        update: {email: "`+ email + `", 
         profileImage: 
         "`+ profileImageUrl + `", userName: "` + userName + `"}}
      where: {email: "`+ email + `"}
    ) {
      id
    }
    publishUserDetail(where: {email: "`+ email + `"}) {
      id
    }
  }
  
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}


export const getUserDetail = async (email) => {
  const query = gql`
  query getUserDetails {
    userDetail(where: 
      {email: "`+ email + `"}) {
      
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export const GetAllUsers = async () => {
  const query = gql`
  query GetAllUsers {
    userDetails(orderBy: point_DESC) {
      id
      profileImage
      userName
    
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}


export const GetAllProgressCourse = async (userEmail) => {
  const query = gql`
  query GetAllUserEnrolledProgressCourse {
    userEnrolledCourses(where: {userEmail: "`+ userEmail + `"}) {
      completedChapter {
        chapterId
      }
      course {
        banner {
          url
        }
        chapters {
          id
          title
          content {
            heading
            description {
              markdown
              html
            }
            output {
              markdown
              html
            }
          }
        }
        description {
          markdown
        }
        id
        level
        name
        price
        time
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
}